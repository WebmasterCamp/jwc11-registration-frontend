import styled from '@emotion/styled'

import {ParticleBackdrop} from './ParticleBackdrop'

export const Heading = styled.h1`
  color: #555;
  font-size: 1.85em;
  font-weight: 300;

  text-align: center;
  margin-bottom: 1.2em;
`

export const HeadingFrame = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-image: url("/images/paper_board_edit.png");
  background-size: 100% auto;
  background-position: center center;
  background-repeat: no-repeat;
  min-width: 300px;
  min-height: 200px;
  padding: 0em 6em;
  color: white;
`


export const BackdropContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(170.48deg, #326BAB -13.52%, #473276 43.7%, #98682E 128.36%);
  background-attachment: fixed;

  width: 100%;
  min-height: 100vh;
  padding: 4em 0;

  @media screen and (max-width: 480px) {
    padding: 0 2em;
  }
`

export function Backdrop({children}: {children: React.ReactChild}) {
  return (
    <BackdropContainer>
      <ParticleBackdrop />

      {children}
    </BackdropContainer>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
