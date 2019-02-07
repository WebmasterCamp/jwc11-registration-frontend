import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'
import {captureException} from '@sentry/browser'
import {Icon} from 'antd'

import {css} from '@emotion/core'

import ReactDropzone from 'react-dropzone'
import {message} from 'antd'
import * as firebase from 'firebase/app'
import {Field} from 'redux-form'

import logger from '../core/log'

interface DropZoneProp {
  preview: boolean
  meta?: {
    error?: boolean
    touched?: boolean
  }
}

// prettier-ignore
const DropZoneContainer = styled.div<DropZoneProp>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  cursor: pointer;
  margin-bottom: 3.2em;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 3px 18.5px 2px rgba(0, 0, 0, 0.18);

  margin: 0 auto;
  margin-bottom: 3.8em;

  width: 200px;
  height: 200px;

  border-radius: 22px;
  transition: 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) all;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.045);
  }

  ${props => props.preview && css`
    background-image: url(${props.preview});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `};

  ${props => props.meta && props.meta.touched && props.meta.error && css`
    border: 5px solid #ee5253;
  `};
`

const dropIconStyle = css`
  color: #555;
  font-size: 1.8em;

  margin-bottom: 1em;

  padding: 0.5em;
  border: 1px solid #555;
  border-radius: 50%;
`

const DropTitle = styled.div`
  color: #555;
  text-align: center;
  font-size: 1.75em;

  font-family: 'FC Lamoon';
`

const Small = styled.small`
  color: #777;
  text-align: center;

  font-size: 1.15em;
  margin-top: 0.5em;

  font-family: 'FC Lamoon';
`

const DropWarning = styled.div`
  color: #ee5253;
  text-align: center;
  font-size: 1.2em;
`

interface OverlayProps {
  active: boolean
}

// prettier-ignore
const Overlay = styled.div<OverlayProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100%;

  opacity: 1;

  ${props => props.active && css`
    opacity: 0;

    &:hover {
      opacity: 1;
    }
  `};
`

export interface UploadProps {
  onChange: Function
  uid: number
  input?: {
    onChange: Function
  }
  meta?: {
    touched: boolean
    error: boolean
  }
}

export interface UploadState {
  preview?: string
}

class Upload extends Component<UploadProps, UploadState> {
  state: UploadState = {}

  async componentDidMount() {
    await this.loadPreview(this.props.uid)
  }

  // TODO: Refactor to use new lifecycle
  async UNSAFE_componentWillReceiveProps(props: UploadProps) {
    if (this.props.uid !== props.uid) {
      await this.loadPreview(props.uid)
    }
  }

  loadPreview = async (uid: number) => {
    const storage = firebase.storage().ref()
    const avatar = storage.child(`avatar/${uid}.jpg`)

    if (!uid) return

    try {
      const url = await avatar.getDownloadURL()

      if (url) {
        logger.log('Avatar URL', url)

        this.setState({preview: url})

        if (this.props.input) {
          this.props.input.onChange(url)
        }
      }
    } catch (err) {
      if (err.code === 'storage/object-not-found') {
        logger.info('Camper', uid, 'has not uploaded an avatar yet.')
        return
      }

      logger.warn(err.message)

      captureException(err)
    }
  }

  onDrop = async (acceptedFiles: File[], rejectedFiles: File[]) => {
    const hide = message.loading('กำลังอัพโหลดรูปประจำตัว กรุณารอสักครู่...', 0)

    if (rejectedFiles.length > 0) {
      logger.warn('Rejected Files:', rejectedFiles)

      hide()
      message.error('รูปโปรไฟล์ต้องมีขนาดน้อยกว่า 10MB และเป็นไฟล์รูปเท่านั้น')
      return
    }

    try {
      const {uid, input} = this.props

      if (!uid) {
        hide()
        message.error('ไม่พบผู้ใช้นี้อยู่ในระบบ ไม่สามารถอัพโหลดรูปภาพได้', 0)

        return
      }

      const storage = firebase.storage().ref()
      const avatar = storage.child(`avatar/${uid}.jpg`)

      const [file] = acceptedFiles
      this.setState({preview: URL.createObjectURL(file)})

      const snapshot = await avatar.put(file)

      if (input && input.onChange) {
        input.onChange(true)
      }

      logger.log('Avatar File:', file)
      logger.log('Uploaded Avatar:', snapshot)

      if (input && input.onChange) {
        input.onChange(snapshot.downloadURL)
      }

      message.success('อัพโหลดรูปประจำตัวเรียบร้อยแล้ว')
    } catch (err) {
      message.error(err.message)

      captureException(err)
    } finally {
      hide()
    }
  }

  render() {
    const {preview} = this.state
    const {meta} = this.props

    return (
      <ReactDropzone
        onDrop={this.onDrop}
        meta={meta}
        maxSize={10000000}
        multiple={false}
        accept="image/*"
      >
        {({getRootProps, getInputProps, isDragActive}) => (
          <DropZoneContainer {...getRootProps()} preview={preview}>
            <input {...getInputProps()} />

            <Overlay active={!!preview}>
              <Icon type="upload" css={dropIconStyle} />

              {meta && meta.touched && meta.error ? (
                <DropWarning>
                  กรุณาอัพโหลด
                  <br />
                  รูปประจำตัว
                </DropWarning>
              ) : (
                <DropTitle>อัพโหลดรูปประจำตัว</DropTitle>
              )}

              <Small>ขอเป็นรูปที่เห็นหน้าชัดนะจ๊ะ</Small>
            </Overlay>
          </DropZoneContainer>
        )}
      </ReactDropzone>
    )
  }
}

const mapStateToProps = (state: any) => ({
  uid: state.user.uid
})

const AvatarUpload = connect(mapStateToProps)(Upload)

export const UploadField = (props: any) => (
  <Field component={AvatarUpload} {...props} />
)

export default AvatarUpload
