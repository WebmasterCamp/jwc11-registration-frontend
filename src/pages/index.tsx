import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import { Backdrop, Container, Paper, HeadingFrame } from "../components/Layout";

const Heading = styled.h1`
  font-size: 2.95em;
  font-weight: 300;
  margin-bottom: 0.3em;
  text-align: center;
  color: white;
`;

const SubHeading = styled.h1`
  color: #555;
  font-size: 2.4em;
  font-weight: 300;
  margin-bottom: 1.8em;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

const MajorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1em;
  width: 100%;
`;

const Character = styled.img`
  height: 30em;
  transition: 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) all;

  &:hover {
    transform: scale(1.08);

    filter: drop-shadow(0 0px 18px rgba(255, 205, 0, 0.18));
    -webkit-filter: drop-shadow(0 0px 18px rgba(255, 205, 0, 0.18));
  }
`;

const RoundButton = styled.button`
  padding: 0.5em;
  font-weight: 500;
  border-radius: 9999px;
  border: none;
`;

const Landing = () => (
  <Backdrop>
    <Container>
      <HeadingFrame>
        <Heading>เลือกสาขา</Heading>
      </HeadingFrame>

      <Row>
        <MajorCard style={{ marginRight: "1.5em" }}>
          <Character src="/images/content.png" />
        </MajorCard>
        <MajorCard>
          <Character src="/images/design.png" />
        </MajorCard>
        <MajorCard>
          <Character src="/images/marketing.png" />
        </MajorCard>
        <MajorCard>
          <Character src="/images/dev.png" />
        </MajorCard>
      </Row>

      <Row style={{ marginTop: "1.5em", marginBottom: "0.8em" }}>
        <RoundButton style={{ backgroundColor: "#E1A34E", fontSize: "2em" }}>
          ยืนยันสาขา
        </RoundButton>
      </Row>
    </Container>
  </Backdrop>
);

export default Landing;
