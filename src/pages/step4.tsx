import React from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'
import {withRouteData} from 'react-static'

import {Backdrop} from '../components/Layout'
import MajorForm from '../components/MajorForm'

import {save, markNext} from '../ducks/submission'

const Title = styled.div`
  position: absolute;
  top: 1em;
  left: 2em;

  color: white;
  font-size: 1.8em;
`

const StepOne = ({save, questions, markNext}) => (
  <Backdrop>
    <Title>STEP 4: คำถามสาขา</Title>
    <MajorForm questions={questions} onSubmit={save} next={markNext} />
  </Backdrop>
)

const enhance = connect(
  null,
  {save, markNext}
)

export default withRouteData(enhance(StepOne))
