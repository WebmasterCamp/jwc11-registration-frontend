import React from 'react'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import Input from './Input'

import withWizard from '../core/form'
import {prev, next} from '../core/step'

const ParentalForm = ({save, handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <Paper>
      <Row>
        <Input name="parentFirstName" label="ชื่อผู้ปกครอง" />
        <Input name="parentLastName" label="นามสกุล" />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <Input name="parentRelation" label="ความเกี่ยวข้อง" />
        <Input name="parentPhone" label="เบอร์โทรศัพท์" />
      </Row>
    </Paper>

    <Row>
      <Button onClick={prev}>ขั้นตอนก่อนหน้า</Button>

      <Button type="submit">ขั้นตอนถัดไป</Button>
    </Row>
  </FormContainer>
)

export default withWizard(ParentalForm)
