import React from 'react'
import styled from '@emotion/styled'

import Button from '../components/Button'
import {Backdrop, Container, Paper} from '../components/Layout'

const Heading = styled.h1`
  color: #777;
  font-size: 1.95em;
  font-weight: 300;

  margin-bottom: 1.2em;
`

const SubHeading = styled.h1`
  color: #555;
  font-size: 1.85em;
  font-weight: 300;

  margin-bottom: 1.8em;
`

const Landing = () => (
  <Backdrop>
    <Container>
      <Paper>
        <Heading>ลงทะเบียนเข้าค่าย | Junior Webmaster Camp XI</Heading>
        <SubHeading>กรุณาเลือกสาขาที่ท่านต้องการในเว็บไซต์หลัก</SubHeading>

        <a href="https://www.jwc.in.th">
          <Button>กลับสู่เว็บไซต์หลัก</Button>
        </a>
      </Paper>
    </Container>
  </Backdrop>
)

export default Landing
