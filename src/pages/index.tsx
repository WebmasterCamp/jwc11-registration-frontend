import React from 'react'
import styled from '@emotion/styled'
import {Link} from '@reach/router'

import Button from '../components/Button'
import {Backdrop, Container, Paper} from '../components/Layout'

const Heading = styled.h1`
  color: #777;
  font-size: 2.95em;
  font-weight: 300;

  margin-bottom: 0.3em;
  text-align: center;
`

const SubHeading = styled.h1`
  color: #555;
  font-size: 2.4em;
  font-weight: 300;

  margin-bottom: 1.8em;
  text-align: center;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`

const MajorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1em;
  width: 100%;
`

const Character = styled.img`
  width: 15em;
  transition: 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) all;

  &:hover {
    transform: scale(1.08);

    filter: drop-shadow(0 0px 18px rgba(255, 205, 0, 0.18));
    -webkit-filter: drop-shadow(0 0px 18px rgba(255, 205, 0, 0.18));
  }
`

const Landing = () => (
  <Backdrop>
    <Container>
      <Paper>
        <Heading>
          ลงทะเบียนเข้าค่าย |{' '}
          <a href="https://ycc.in.th" target="_blank">
            Young Creator's Camp
          </a>
        </Heading>

        <Row>
          <MajorCard style={{marginRight: '1.5em'}}>
            <Link to="/programming">
              <Character src="/images/character-dev.png" />
            </Link>
          </MajorCard>

          <MajorCard>
            <Link to="/design">
              <Character src="/images/character-design.png" />
            </Link>
          </MajorCard>
        </Row>

        <Row style={{marginTop: '1.5em', marginBottom: '0.8em'}}>
          <Link to="/programming">
            <Button fancy>สมัครเป็น Programmer</Button>
          </Link>
          <Link to="/design">
            <Button fancy>สมัครเป็น Designer</Button>
          </Link>
        </Row>
      </Paper>
    </Container>
  </Backdrop>
)

export default Landing
