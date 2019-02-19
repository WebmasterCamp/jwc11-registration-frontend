import React from "react";
import Ink from "react-ink";
import styled from "@emotion/styled";

import { css } from "@emotion/core";

interface ButtonContainerProps {
  success?: boolean;
  disabled?: boolean;
  fancy?: boolean;
  color?: string;
}

// prettier-ignore
const ButtonContainer = styled.button`
  font-size: 1.8em;
  line-height: 1.5em;
  height: 2.3em;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  border: 0;
  color: #efefef;
  cursor: pointer;
  appearance: none;
  // margin-left: 1em;
  align-self: center;
  border-radius: 9999px;

  background: ${props => props.color || '#E1A34E'};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  
  outline: none;
  padding: 0.5em 1.4em;
  position: relative;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: capitalize;

  // @media screen and (max-width: 840px) {
  //   width: 100%;
  //   margin: 0;
  //   margin-bottom: 1em;
  // }

  &:hover {
    background: #efa540;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }

  ${(props) => (props as any).success && css`
    background: #2ecc71;

    &:hover {
      background: #27ae60;
    }
  `};

  ${(props) => props.disabled && css`
    background: #95afc0;

    &:hover {
      background: #95afc0;
    }
  `};

  ${props => (props as any).fancy && css`
    &:hover {
      background: linear-gradient(45deg, #8FBFFF, #C97FD7);
    }
  `}
`

type ButtonProps = {
  children: React.ReactChildren | string;
  type?: string;
  onClick?: () => any;
} & ButtonContainerProps;

const Button = ({ children, onClick, ...props }: ButtonProps) => (
  <ButtonContainer {...props} onClick={onClick}>
    {children}
    <Ink />
  </ButtonContainer>
);

export default Button;
