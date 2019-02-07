import styled from '@emotion/styled'

import {BubbleBackdrop} from './BubbleBackdrop'

import {bubbly} from '../core/bubbly'

// background-image: linear-gradient(45deg, #00B7FF, #FFFFC7)

export const Heading = styled.h1`
  color: #555;
  font-size: 1.85em;
  font-weight: 300;

  text-align: center;
  margin-bottom: 1.2em;
`

export const BackdropContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  /* background-image: linear-gradient(to top, #99ccff, #ffffff); */
  background: transparent;
  background-attachment: fixed;

  width: 100%;
  min-height: 100vh;

  padding-top: 7em;
  padding-bottom: 7em;
`

bubbly({
  animate: true,
  blur: 1,
  colorStart: '#99ccff',
  colorStop: '#ffffff'
  // colorStart: '#4c004c',
  // colorStop: '#1a001a'
})

export function Backdrop({children}: {children: React.ReactChild}) {
  return <BackdropContainer>{children}</BackdropContainer>
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 0 auto;
  max-width: 980px;

  padding: 0 2.2em;

  @media screen and (max-width: 480px) {
    padding: 0 1.2em;
  }
`

export const FormContainer = styled.form`
  width: 100%;
  margin: 0 auto;
  max-width: 980px;

  padding: 0 2.2em;

  @media screen and (max-width: 480px) {
    padding: 0 1.2em;
  }
`

export const Paper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 1.8em 2.2em;
  margin-bottom: 3.2em;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 3px 18.5px 2px rgba(0, 0, 0, 0.18);

  width: 100%;
`

// prettier-ignore
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`
