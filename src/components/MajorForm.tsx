import React from "react";

import { FormContainer, Paper, Row } from "./Layout";
import Button from "./Button";
import TextArea from "./TextArea";
import DesignUpload from "./DesignUpload";

import withWizard from "../core/form";
import { getMajorFromPath } from "../core/util";
import { prev, next } from "../core/step";
import ChangeMajorButton from "./ChangeMajorButton";

interface Question {
  Q1?: string;
  Q2?: string;
}

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
        <Button onClick={prev}>ขั้นตอนก่อนหน้า</Button>

        <Button onClick={next} type="submit">
          ขั้นตอนถัดไป
        </Button>
      </Row>
      <Row style={{ marginBottom: "2.8em" }}>
        <ChangeMajorButton />
      </Row>
    </FormContainer>
  );
};

export default withWizard(MajorQuestionForm);
