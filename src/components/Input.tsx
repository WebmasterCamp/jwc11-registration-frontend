import styled from "@emotion/styled";

import { css } from "@emotion/core";

import withField from "./withField";

interface IMeta {
  touched: boolean;
  error: boolean;
}
// prettier-ignore
export const TextInput = styled.input<{meta: IMeta}>`
  font-weight: 300;
  text-align: left;
  font-size: 1.5em;
  line-height: 1.2em;

  width: 100%;
  padding: 0.15em 0.6em;

  min-width: 10em;
  min-height: 40px;

  outline: none;
  transition: 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) all;

  border: 1px solid #E0E0E0;
  border-radius: 4px;

  background: white;
  color: #555;

  &::placeholder {
    color: #E0E0E0;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }

  &:hover {
    box-shadow: 0 3px 18.5px 2px rgba(0, 0, 0, 0.18);
  }

  &:focus,
  &:active {
    transform: scale(1.005);
    box-shadow: 0 3px 18.5px 2px rgba(0, 0, 0, 0.18);
  }

  &:focus + label {
    transform: translateY(-40px) scale(1);
  }

  ${props => props.meta.touched && props.meta.error && css`
    border-bottom: 2px solid #e74c3c;
  `};
`

export default withField(TextInput);
