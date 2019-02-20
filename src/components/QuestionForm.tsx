import React from 'react'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import TextArea from './TextArea'

import {General} from '../core/questions'

import withWizard from '../core/form'
import {prev, next} from '../core/step'

const QuestionForm = ({next, save, handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <Paper>
      <TextArea placeholder="ว่ามา ฉันอ่านทั้งหมด เริ่ม!" name="generalAnswer1" label={General.Q1} wordy />
      {/* <TextArea name="generalAnswer2" label={General.Q2} wordy />
      <TextArea name="generalAnswer3" label={General.Q3} wordy /> */}
    </Paper>

    <Row>
      <Button onClick={prev}>ขั้นตอนก่อนหน้า</Button>

      <Button onClick={next} type="submit">
        ขั้นตอนถัดไป
      </Button>
    </Row>
  </FormContainer>
)

export default withWizard(QuestionForm)
