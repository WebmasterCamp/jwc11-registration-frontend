import React from "react";

import { FormContainer, Row, Paper } from "./Layout";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import DatePicker from "./DatePicker";
import { UploadField } from "./Upload";

import withWizard from "../core/form";
import { next } from "../core/step";
import styled from "@emotion/styled";

const toOptions = i => ({ value: i, label: i });

const Options = options =>
  Object.entries(options).map(([value, label]) => ({ value, label }));

export const religions = {
  atheist: "ไม่นับถือศาสนา",
  buddhist: "ศาสนาพุทธ",
  christianity: "ศาสนาคริสต์",
  islam: "ศาสนาอิสลาม",
  other: "ศาสนาอื่นๆ"
};

export const grades = {
  m3: "มัธยมศึกษาปีที่ 3",
  m4: "มัธยมศึกษาปีที่ 4",
  m5: "มัธยมศึกษาปีที่ 5",
  m6: "มัธยมศึกษาปีที่ 6",
  p1: "ปวช.",
  other: "อื่นๆ"
};

export const genders = {
  male: "ชาย",
  female: "หญิง",
  other: "เพศอื่นๆ",
  none: "ไม่ระบุ"
};

export const shirtSizes = {
  XS: "XS (รอบอก 31 นิ้ว ความยาว 25 นิ้ว)",
  S: "S (รอบอก 36 นิ้ว ความยาว 28 นิ้ว)",
  M: "M (รอบอก 38 นิ้ว ความยาว 28.5 นิ้ว)",
  L: "L (รอบอก 42 นิ้ว ความยาว 30 นิ้ว)",
  XL: "XL (รอบอก 44 นิ้ว ความยาว 30.5 นิ้ว)",
  XXL: "XXL (รอบอก 48 นิ้ว ความยาว 32 นิ้ว)"
};

const religionOptions = Options(religions);
const gradeOptions = Options(grades);
const genderOptions = Options(genders);
const shirtSizeOptions = Options(shirtSizes);

// prettier-ignore
const bloodGroups = ['O+', 'O−', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map(toOptions)

const Col = styled.div`
  padding: 0px 0.5em;
  width: 100%;
`;

const PersonalForm = ({ next, handleSubmit }) => (
  <FormContainer onSubmit={handleSubmit}>
    <Paper>
      <UploadField name="photo" />

      <Row>
        <Col>
          <Input float name="firstname" label="ชื่อ" placeholder="แฮรี่" />
        </Col>
        <Col>
          <Input
            float
            name="lastname"
            label="นามสกุล"
            placeholder="พ็อตเตอร์"
          />
        </Col>
        <Col>
          <Input float name="nickname" label="ชื่อเล่น" placeholder="เจมส์" />
        </Col>
      </Row>

      <Row>
        <Col>
          <DatePicker name="birthdate" label="วันเกิด" float />
        </Col>
        <Col>
          <Select name="gender" label="เพศ" options={genderOptions} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Row>
            <Select
              float
              name="religion"
              label="ศาสนา"
              options={religionOptions}
              placeholder="พุทธ, คริสต์, อิสลาม, ฯลฯ"
            />
          </Row>
          <Row>
            <Input
              float
              name="school"
              label="โรงเรียน"
              placeholder="ฮอกวอตส์วิทยาคม"
            />
          </Row>
        </Col>
        <Col>
          <Select name="class" label="ระดับชั้น" options={gradeOptions} />
        </Col>
      </Row>

      <Row>
        <Col>
          <TextArea float name="address" label="ถิ่นที่อยู่" />
        </Col>
        <Col>
          <Row>
            <Input
              float
              name="phone"
              label="เบอโทรศัพท์มือถือ"
              placeholder="0931354239"
            />
          </Row>
          <Row>
            <Input
              float
              name="email"
              label="อีเมล"
              placeholder="abc_def@xyz.klm"
            />
          </Row>
        </Col>
      </Row>
    </Paper>

    <Row>
      <Button disabled>ขั้นตอนก่อนหน้า</Button>

      <Button onClick={next} type="submit">
        ขั้นตอนถัดไป
      </Button>
    </Row>
  </FormContainer>
);

export default withWizard(PersonalForm);
