import React from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'

import {Backdrop} from '../components/Layout'
import QuestionForm from '../components/QuestionForm'

import {save, markNext} from '../ducks/submission'

const Title = styled.div`
  position: absolute;
  top: 1em;
  left: 2em;

  color: white;
  font-size: 1.8em;
`

const StepOne = ({save, markNext}) => (
  <Backdrop>
    <Title>STEP 3: คำถามกลาง</Title>
    <QuestionForm onSubmit={save} next={markNext} />
  </Backdrop>
)

const enhance = connect(
  null,
  {save, markNext}
)

export default enhance(StepOne)
