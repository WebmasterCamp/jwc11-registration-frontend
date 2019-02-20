import React, { Fragment } from "react";
import { Field } from "redux-form";
import styled from "@emotion/styled";

const Label = styled.label`
  font-size: 1.2em;
  font-weight: 300;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Topic = styled.label`
  line-height: 1.5;
  font-size: 1.5em;
  font-weight: 400;
  color: #777;
  cursor: text;
  pointer-events: none;
  white-space: pre-line;
  word-break: break-word;
  word-wrap: break-word;
`;

interface RadioGroupProps {
  options: string[];
  name: string;
  direction: "row" | "column";
  label: string;
}

export default (props: RadioGroupProps) => {
  const { options, name, direction, label } = props;
  return (
    <Container style={{ flexDirection: "column" }}>
      <Topic>{label}</Topic>
      <Container style={{ flexDirection: direction }}>
        {options.map((choice, index) => {
          return (
            <Label key={index}>
              <Field
                component={"input"}
                name={name}
                type="radio"
                value={choice}
              />
              &nbsp;{choice}
            </Label>
          );
        })}
      </Container>
    </Container>
  );
};
