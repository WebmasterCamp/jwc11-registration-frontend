import React from "react";
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

import { Backdrop, Row, Paper, HeadingFrame } from "../components/Layout";

import questions, { General } from "../core/questions";

import { submit } from "../ducks/submission";

import { getMajorFromPath } from "../core/util";
// import NavBar from "../components/NavBar";
import TransparentButton from "../components/TransparentButton";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 980px;

  padding: 0 2.2em;

  @media screen and (max-width: 480px) {
    padding: 0 1.2em;
  }
`;

const Title = styled.h1``;

const personalFields = Object.entries({
  firstname: "ชื่อ",
  lastname: "นามสกุล",
  nickname: "ชื่อเล่น",
  // age: 'อายุ',
  birthdate: "วันเกิด",
  gender: "เพศ",
  religion: "ศาสนา",
  class: "ระดับชั้น",
  school: "โรงเรียน",
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
});

const parentFields = Object.entries({
  parentFirstName: "ชื่อผู้ปกครอง",
  parentLastName: "นามสกุลผู้ปกครอง",
  parentRelation: "ความสัมพันธ์",
  parentPhone: "เบอร์โทรศัพท์"
});

const Card = styled(Paper)`
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.3em;
`;

const Item = styled.div`
  color: #333;
  font-size: 1.32em;
  line-height: 1.8em;
`;

const Label = styled.strong`
  font-weight: bold;

  white-space: pre-line;
  word-break: break-word;
  word-wrap: break-word;
`;

const Paragraph = styled.p`
  margin-top: 0.6em;

  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
`;

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

const Section = ({ data, title, fields }) => (
  <Card>
    <Title>{title}</Title>

    {fields.map(([name, label]) => (
      <Item key={name}>
        <Label>{label}:</Label> {format(name, data)}
      </Item>
    ))}
  </Card>
);

const GeneralSection = ({ data }) => (
  <Card>
    <Title>คำถามทั่วไป</Title>
    <Item>
      <Label>{General.Q1}</Label>

      <Paragraph>{data.generalAnswer1}</Paragraph>
    </Item>

    <Item>
      <Label>{General.Q2}</Label>

      <Paragraph>{data.generalAnswer2}</Paragraph>
    </Item>

    <Item>
      <Label>{General.Q3}</Label>

      <Paragraph>{data.generalAnswer3}</Paragraph>
    </Item>
  </Card>
);

const MajorSection = ({ data }) => {
  const major = getMajorFromPath();

  if (!major) {
    return (
      <Card>
        <Title>คำถามสาขา</Title>

        <Item>กรุณารอสักครู่</Item>
      </Card>
    );
  }

  let { Q1, Q2 } = questions[major];

  // if (major === 'programming') {
  //   Q3 = Q3Dev
  // }

  return (
    <Card>
      <Title>คำถามสาขา</Title>
      <Item>
        <Label>{Q1}</Label>

        {major === "design" ? (
          <DesignUpload />
        ) : (
          <Paragraph>{data.majorAnswer1}</Paragraph>
        )}
      </Item>

      <Item>
        <Label>{Q2}</Label>
        <Paragraph>{data.majorAnswer2}</Paragraph>
      </Item>

      {/* <Item>
        <Label>{Q3}</Label>
      </Item> */}
    </Card>
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

const NavBar = ({ submit, style }) => (
  <Row style={style}>
    <Button onClick={prev}>ย้อนกลับไปแก้ไข</Button>

    <Button onClick={submit} success>
      ยืนยันการสมัครเข้าค่าย JWC
    </Button>
  </Row>
);

const Heading = styled.h1`
  font-size: 2.8em;
  font-weight: 300;
  margin-bottom: 0.3em;
  text-align: center;
  color: white;
`;

// const Verify = ({ data = {} as any, submit }) => (
//   <Backdrop>
//     <NavBar />
//     <HeadingFrame>
//       <Heading>ตรวจคำตอบ</Heading>
//     </HeadingFrame>
//     <Container>
//       <Upload value={data.photo} disabled />
//       {/* <NavBar submit={submit} style={{ marginBottom: "2.8em" }} /> */}
//       <TransparentButton arrow="left">ย้อนกลับ</TransparentButton>
//       <Section title="ข้อมูลส่วนตัว" fields={personalFields} data={data} />
//       <Section title="ข้อมูลผู้ปกครอง" fields={parentFields} data={data} />
//       <GeneralSection
//         // fields={personalFields}
//         data={data}
//       />
//       <MajorSection data={data} />

//       {/* <NavBar submit={submit} style={{}} /> */}
//     </Container>
//   </Backdrop>
// );

const Verify = ({ data = {} as any, submit }) => (
  <Backdrop>
    {/* <NavBar /> */}
    <HeadingFrame>
      <Heading>ตรวจคำตอบ</Heading>
    </HeadingFrame>
    <Container>
      <Paper>
        <Row>รูปประจำตัว</Row>
        <Upload value={data.photo} disabled />
      </Paper>
      <NavBar submit={submit} style={{ marginBottom: "2.8em" }} />
      <TransparentButton arrow="left">ย้อนกลับ</TransparentButton>
      <Section title="ข้อมูลส่วนตัว" fields={personalFields} data={data} />
      <Section title="ข้อมูลผู้ปกครอง" fields={parentFields} data={data} />
      <GeneralSection
        // fields={personalFields}
        data={data}
      />
      <MajorSection data={data} />

      <NavBar submit={submit} style={{}} />
    </Container>
  </Backdrop>
);

const mapStateToProps = (state: any) => {
  console.log(state);
  console.log({
    data: getFormValues("submission")(state)
  });
  return {
    data: getFormValues("submission")(state) || state.camper
  };
};

const enhance = connect(
  mapStateToProps,
  { submit }
);

export default enhance(Verify);
