import React from 'react'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import Input from './Input'
import Select from './Select'

import withWizard from '../core/form'
import {prev} from '../core/step'

import styled from "@emotion/styled";
import TextArea from './TextArea';

const Col = styled.div`
  padding: 0px 0.5em;
  width: 100%;
`;


const toOptions = i => ({ value: i, label: i });

const Options = options =>
  Object.entries(options).map(([value, label]) => ({ value, label }));

export const shirtSizes = {
  XS: "XS (รอบอก 31 นิ้ว ความยาว 25 นิ้ว)",
  S: "S (รอบอก 36 นิ้ว ความยาว 28 นิ้ว)",
  M: "M (รอบอก 38 นิ้ว ความยาว 28.5 นิ้ว)",
  L: "L (รอบอก 42 นิ้ว ความยาว 30 นิ้ว)",
  XL: "XL (รอบอก 44 นิ้ว ความยาว 30.5 นิ้ว)",
  XXL: "XXL (รอบอก 48 นิ้ว ความยาว 32 นิ้ว)"
};
const shirtSizeOptions = Options(shirtSizes);

const ParentalForm = ({next, handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <Paper>

      <Row>
        <Col><Input float name="disease" label="โรคประจำตัว" /></Col>
        <Col><Input float name="foodAllergy" label="สิ่งที่แพ้ / อาหารที่แพ้" /></Col>
      </Row>
      <Row>
        <Col><Input float name="drugAllergy" label="ยาที่แพ้" /></Col>
        <Col><Select name="shirtSize" label="ไซส์เสื้อ" options={shirtSizeOptions} /></Col>
      </Row>
      <Row>
      <Col>
          <TextArea float name="activity" label="กิจกรรมที่เข้าร่วมหรือผลงานที่เคยทำ เช่น ค่าย เวทีประกวด การแสดง ฯลฯ" />
        </Col>
      </Row>
      <Row>
        <Col><Input float name="parentFirstName" label="ชื่อผู้ปกครอง" /></Col>
        <Col><Input float name="parentLastName" label="นามสกุล" /></Col>
      </Row>
      <Row>
        <Col><Input float name="parentRelation" label="ความเกี่ยวข้อง" /></Col>
        <Col><Input float name="parentPhone" label="เบอร์โทรศัพท์" /></Col>
      </Row>
    </Paper>

    <Row>
      <Button onClick={prev}>ขั้นตอนก่อนหน้า</Button>

      <Button onClick={next} type="submit">
        ขั้นตอนถัดไป
      </Button>
    </Row>
  </FormContainer>
)

export default withWizard(ParentalForm)
