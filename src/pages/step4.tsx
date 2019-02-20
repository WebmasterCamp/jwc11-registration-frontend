import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { withRouteData } from "react-static";

import { Backdrop } from "../components/Layout";
import MajorForm from "../components/MajorForm";

import { save, markNext } from "../ducks/submission";
import Title from "../components/Title";
import Stepper from "../components/Stepper";
import NavBar from "../components/NavBar";

const StepOne = ({ save, questions, markNext }) => (
  <Backdrop>
    <NavBar />
    <Title>คำถามสาขา</Title>
    <Stepper
      currentStep={"คำถามสาขา"}
      steps={["ข้อมูลนักเวทย์", "ข้อมูลเพิ่มเติม", "คำถามกลาง", "คำถามสาขา"]}
    />
    <MajorForm questions={questions} onSubmit={save} next={markNext} />
  </Backdrop>
);

const enhance = connect(
  null,
  { save, markNext }
);

export default withRouteData(enhance(StepOne));
