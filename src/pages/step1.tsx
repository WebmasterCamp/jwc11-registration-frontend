import React from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'

import {Backdrop} from '../components/Layout'
import PersonalForm from '../components/PersonalForm'

import {save} from '../ducks/submission'

const Title = styled.div`
  position: absolute;
  top: 1em;
  left: 2em;

  color: white;
  font-size: 1.8em;
`

const StepOne = ({save}) => (
  <Backdrop>
    <Title>STEP 1: ข้อมูลส่วนตัว</Title>
    <PersonalForm onSubmit={save} />
  </Backdrop>
)

const enhance = connect(
  null,
  {save}
)

export default enhance(StepOne)
