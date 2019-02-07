import React from 'react'
import Ink from 'react-ink'
import styled from '@emotion/styled'

import {css} from '@emotion/core'

interface ButtonContainerProps {
  success?: boolean
  disabled?: boolean
  color?: string
}

// prettier-ignore
const ButtonContainer = styled.button<ButtonContainerProps>`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 3em;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  align-self: center;
  border-radius: 3px;
  background: ${props => props.color || '#2c3e50'};
  appearance: none;
  border: 0;
  margin-left: 1em;
  cursor: pointer;
  color: #efefef;
  font-size: 1.3em;
  letter-spacing: 0.1em;
  line-height: 2em;
  outline: none;
  padding: 0.5em 1.4em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;

  @media screen and (max-width: 840px) {
    width: 100%;
    margin: 0;
    margin-bottom: 1em;
  }

  &:hover {
    background: #34495e;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }

  ${(props) => props.success && css`
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
`

type ButtonProps = {
  children: React.ReactChildren | string
} & ButtonContainerProps

const Button = ({children, ...props}: ButtonProps) => (
  <ButtonContainer {...props}>
    {children}
    <Ink />
  </ButtonContainer>
)

export default Button
