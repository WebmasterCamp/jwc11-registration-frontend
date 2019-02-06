import React from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'

import {Backdrop} from '../components/Layout'
import ParentalForm from '../components/ParentalForm'

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
    <Title>STEP 2: ข้อมูลผู้ปกครอง</Title>
    <ParentalForm onSubmit={save} />
  </Backdrop>
)

const enhance = connect(
  null,
  {save}
)

export default enhance(StepOne)
