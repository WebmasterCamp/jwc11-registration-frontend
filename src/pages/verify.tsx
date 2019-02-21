import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import { getFormValues } from "redux-form";
import Image from "react-medium-image-zoom";
import { navigate } from "@reach/router";

import Button from "../components/Button";
import Upload from "../components/Upload";
import { DesignUpload } from "../components/DesignUpload";

import {
  religions,
  grades,
  genders,
  shirtSizes
} from "../components/PersonalForm";

import {
  Backdrop,
  Row,
  Paper,
  FormContainer,
  HeadingFrame
} from "../components/Layout";

import questions, { General } from "../core/questions";

import { submit } from "../ducks/submission";

import { getMajorFromPath } from "../core/util";
import NavBar from "../components/NavBar";
import ChangeMajorButton from "../components/ChangeMajorButton";
// import { formatGroupQuestion } from "react-select/lib/builtins";

// export const Container = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   max-width: 980px;

//   padding: 0 2.2em;

//   @media screen and (max-width: 480px) {
//     padding: 0 1.2em;
//   }
// `;

const Col = styled.div`
  padding: 0px 0.5em;
  width: 100%;
`;
const Title = styled.h1``;

const person = {
  firstname: "ชื่อ",
  lastname: "นามสกุล",
  nickname: "ชื่อเล่น",
  // age: 'อายุ',
  birthdate: "วันเกิด",
  gender: "เพศ",
  religion: "ศาสนา",
  school: "โรงเรียน",
  class: "ระดับชั้น",
  phone: "เบอร์โทรศัพท์",
  email: "อีเมล",
  socialMedia: "Social Media",
  address: "ที่อยู่",
  disease: "โรคประจำตัว",
  foodAllergy: "อาหารที่แพ้",
  drugAllergy: "ยาที่แพ้",
  shirtSize: "ขนาดเสื้อ",
  activity: "กิจกรรมหรือผลงานที่น้องๆ เคยทำหรือเข้าร่วม",
  expectation: "คาดหวังอะไรจากค่ายนี้บ้าง",
  bloodGroup: "กรุ๊ปเลือด"
};
const personalFields = Object.entries(person);
const parent = {
  parentFirstName: "ชื่อผู้ปกครอง",
  parentLastName: "นามสกุลผู้ปกครอง",
  parentRelation: "ความสัมพันธ์",
  parentPhone: "เบอร์โทรศัพท์"
};
const parentFields = Object.entries(parent);

const Underline = styled.div`
  content: "";
  width: 100%;
  height: 1px;
  margin-top: 3em;
  margin-bottom: 3em;
  bottom: 0;
  left: 0;
  background-color: #e0e0e0;
`;

const Item = styled.div`
  color: #333;
  font-size: 1.32em;
  line-height: 1.8em;
`;

// const Answer = styled.p`
//   margin-top: 0.6em;

//   white-space: pre-wrap;
//   word-wrap: break-word;
//   word-break: break-word;
// `;

function format(name, data) {
  const answer = data[name];

  if (name === "religion") {
    return religions[answer];
  }

  if (name === "class") {
    return grades[answer];
  }

  if (name === "gender") {
    return genders[answer];
  }

  if (name === "shirtSize") {
    return shirtSizes[answer];
  }

  if (answer) {
    return answer;
  }

  return "-";
}

const PersonalItem = ({ title, data }) => (
  <Col>
    <Question>{person[title]}</Question>
    <Answer>{format(title, data)}</Answer>
  </Col>
);

const ParentalItem = ({ title, data }) => (
  <Col>
    <Question>{parent[title]}</Question>
    <Answer>{format(title, data)}</Answer>
  </Col>
);

const Row3 = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Row2 = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
`;
const Row1 = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
`;
const Section = styled.div`
  width: 100%;
`;

const PersonalSection = ({ data }) => (
  <Section>
    <Title>คำถามทั่วไป</Title>
    <Row3>
      <PersonalItem title={"firstname"} data={data} />
      <PersonalItem title={"lastname"} data={data} />
      <PersonalItem title={"nickname"} data={data} />
      <PersonalItem title={"birthdate"} data={data} />
      <PersonalItem title={"gender"} data={data} />
      <PersonalItem title={"religion"} data={data} />
      <PersonalItem title={"school"} data={data} />
      <PersonalItem title={"class"} data={data} />
    </Row3>
    <Underline />
    <Row2>
      <Row1>
        <PersonalItem title={"address"} data={data} />
      </Row1>
      <Row1>
        <PersonalItem title={"phone"} data={data} />
        <PersonalItem title={"email"} data={data} />
      </Row1>
    </Row2>
    <Underline />
    <Row2>
      <PersonalItem title={"disease"} data={data} />
      <PersonalItem title={"foodAllergy"} data={data} />
      <PersonalItem title={"drugAllergy"} data={data} />
      <PersonalItem title={"shirtSize"} data={data} />
    </Row2>
    <Row1>
      <PersonalItem title={"activity"} data={data} />
    </Row1>
    <Underline />
    <Row2>
      <ParentalItem title={"parentFirstName"} data={data} />
      <ParentalItem title={"parentLastName"} data={data} />
      <ParentalItem title={"parentRelation"} data={data} />
      <ParentalItem title={"parentPhone"} data={data} />
    </Row2>
    <Underline />
  </Section>
);

const Question = styled.div`
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #7e8991;
  margin: 0.2em 0em;
`;
const Answer = styled.div`
  line-height: 30px;
  font-size: 16px;
  letter-spacing: 0.01em;
  margin: 0em 0em 1em 0em;
  color: #223442;
`;

const GeneralSection = ({ data }) => (
  <Section>
    <Title>คำถามกลาง</Title>
    <Row1>
      <Col>
        <Question>{General.Q1}</Question>
        <Answer>{data.generalAnswer1}</Answer>
      </Col>
    </Row1>
    <Row1>
      <Col>
        <Question>{General.Q2}</Question>
        <Answer>{data.generalAnswer2}</Answer>
      </Col>
    </Row1>
    <Row1>
      <Col>
        <Question>{General.Q3}</Question>
        <Answer>{data.generalAnswer3}</Answer>
      </Col>
    </Row1>
  </Section>
);

const MajorSection = ({ data }) => {
  const major = getMajorFromPath();

  if (!major) {
    return (
      <Section>
        <Title>คำถามสาขา</Title>

        <Item>กรุณารอสักครู่</Item>
      </Section>
    );
  }

  let { Q1, Q2 } = questions[major];

  // if (major === 'programming') {
  //   Q3 = Q3Dev
  // }

  return (
    <Section>
      <Title>คำถามสาขา</Title>
      <Item>
        <Question>{Q1}</Question>

        {major === "design" ? (
          <DesignUpload disabled />
        ) : (
          <Answer>{data.majorAnswer1}</Answer>
        )}
      </Item>

      <Item>
        <Question>{Q2}</Question>
        <Answer>{data.majorAnswer2}</Answer>
      </Item>

      {/* <Item>
        <Question>{Q3}</Question>
      </Item> */}
    </Section>
  );
};

const prev = () => {
  const major = getMajorFromPath();

  navigate(`/${major}/step4`);
};

const PageTitle = styled.div`
  position: absolute;
  top: 1em;
  left: 1em;

  color: white;
  font-size: 1.6em;
`;

const Heading = styled.h1`
  font-size: 2.8em;
  font-weight: 300;
  margin-bottom: 0.3em;
  text-align: center;
  color: white;
`;

const Label = styled.label`
  color: #7e8991;
  font-size: 1.4em;
  margin: 0.6em 0;
`;

const SubmitBar = ({ submit, style }) => (
  <Row style={style}>
    <Button onClick={prev}>ย้อนกลับไปแก้ไข</Button>

    <Button onClick={submit} success>
      ยืนยันการสมัครเข้าค่าย JWC
    </Button>
  </Row>
);
const Verify = ({ data = {} as any, submit }) => (
  <FormContainer>
    <NavBar />
    <HeadingFrame>
      <Heading>ตรวจคำตอบ</Heading>
    </HeadingFrame>
    <Paper style={{ marginTop: "100px" }}>
      <Upload value={data.photo} />
      <PersonalSection data={data} />
      <GeneralSection data={data} />
      <Underline />
      <MajorSection data={data} />
    </Paper>
    <SubmitBar submit={submit} style={{ marginBottom: "2.8em" }} />
    <ChangeMajorButton />
  </FormContainer>
);

const mapStateToProps = (state: any) => {
  return {
    data: getFormValues("submission")(state) || state.camper
  };
};

const enhance = connect(
  mapStateToProps,
  { submit }
);

export default enhance(Verify);
