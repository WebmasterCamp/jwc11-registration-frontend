import React from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'
import {withRouteData} from 'react-static'

import {Backdrop} from '../components/Layout'
import MajorForm from '../components/MajorForm'

import {save} from '../ducks/submission'

const Title = styled.div`
  position: absolute;
  top: 1em;
  left: 2em;

  color: white;
  font-size: 1.8em;
`

const StepOne = ({save, questions}) => (
  <Backdrop>
    <Title>STEP 4: คำถามสาขา</Title>
    <MajorForm questions={questions} onSubmit={save} />
  </Backdrop>
)

const enhance = connect(
  null,
  {save}
)

export default withRouteData(enhance(StepOne))
