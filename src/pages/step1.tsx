import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import { Backdrop } from "../components/Layout";
import PersonalForm from "../components/PersonalForm";

import { save, markNext } from "../ducks/submission";
import Stepper from "../components/Stepper";
import NavBar from "../components/NavBar";
import Title from "../components/Title";

const StepOne = ({ save, markNext }) => (
  <Backdrop>
    <NavBar />
    <Title>ข้อมูลส่วนตัว</Title>
    <Stepper
      currentStep={"ข้อมูลเพิ่มเติม"}
      steps={["ข้อมูลส่วนตัว", "ข้อมูลเพิ่มเติม", "คำถามกลาง", "คำถามสาขา"]}
    />
    <PersonalForm onSubmit={save} next={markNext} />
  </Backdrop>
);

const enhance = connect(
  null,
  { save, markNext }
);

export default enhance(StepOne);
