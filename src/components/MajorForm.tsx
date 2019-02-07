import React from 'react'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import TextArea from './TextArea'
import DesignUpload from './DesignUpload'

import withWizard from '../core/form'
import {getMajorFromPath} from '../core/util'
import {prev, next} from '../core/step'

const MajorQuestionForm = ({questions = {}, handleSubmit}) => {
  const major = getMajorFromPath()
  const Q1Field = major === 'design' ? DesignUpload : TextArea
  // const Q3 = major === 'programming' ? Q3Dev : questions.Q3

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Paper>
        <Q1Field name="majorAnswer1" label={questions.Q1} wordy />
        <TextArea name="majorAnswer2" label={questions.Q2} wordy />
      </Paper>

      <Row>
        <Button onClick={prev}>ขั้นตอนก่อนหน้า</Button>

        <Button type="submit">ขั้นตอนถัดไป</Button>
      </Row>
    </FormContainer>
  )
}

export default withWizard(MajorQuestionForm)
