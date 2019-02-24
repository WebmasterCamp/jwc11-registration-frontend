import React from "react";

import { FormContainer, Paper, Row } from "./Layout";
import Button from "./Button";
import TextArea from "./TextArea";
import DesignUpload from "./DesignUpload";

import withWizard from "../core/form";
import { getMajorFromPath } from "../core/util";
import { prev, next } from "../core/step";
import ChangeMajorButton from "./ChangeMajorButton";
import TransparentButton from "./TransparentButton";
import styled from "@emotion/styled";
interface Question {
  Q1?: string;
  Q2?: string;
}
const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 650px) {
    font-size: 0.6em;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.5em;
  }
`;


const MajorQuestionForm = ({ questions = {} as Question, handleSubmit }) => {
  const major = getMajorFromPath();
  const Q1Field = major === "design" ? DesignUpload : TextArea;
  // const Q3 = major === 'programming' ? Q3Dev : questions.Q3

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Paper>
        <Q1Field
          placeholder="ว่ามา ฉันอ่านทั้งหมด เริ่ม!"
          name="majorAnswer1"
          label={questions.Q1}
          wordy
        />
        <TextArea
          placeholder="ว่ามา ฉันอ่านทั้งหมด เริ่ม!"
          name="majorAnswer2"
          label={questions.Q2}
          wordy
        />
      </Paper>

      <Row style={{ marginBottom: "2em" }}>
      <ButtonGroup>
        <TransparentButton arrow="left" onClick={prev} style={{ marginRight: "0.8em" }}>
          ก่อนหน้า
        </TransparentButton>

        <Button onClick={next} type="submit" arrow="right" style={{ marginLeft: "0.8em" }}>
          ถัดไป
        </Button>
      </ButtonGroup>
      </Row>
      <Row style={{ marginBottom: "2.8em" }}>
        <ChangeMajorButton />
      </Row>
    </FormContainer>
  );
};

export default withWizard(MajorQuestionForm);
