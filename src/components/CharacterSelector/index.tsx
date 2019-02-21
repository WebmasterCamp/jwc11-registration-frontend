import React, { useEffect } from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import Button from "../Button";
import CharacterCard from "./CharacterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../components/Modal";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 3em;
`;

const Card = styled.div`
  display: flex;
  algin-items: center;
  flex-flow: column nowrap;
  justify-content: center;
`;

const Description = styled.label`
  color: white;
  font-size: 2em;
  align-self: center;
  margin-top: 2em;
`;

enum Character {
  content = "content",
  design = "design",
  marketing = "marketing",
  programming = "programming"
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 780);
  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth < 780);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return isMobile;
};
export default props => {
  const [selector, setSelector] = useState<Character>(Character.content);
  const [toggle, setIsToggle] = useState<boolean>(false);
  const [field, setField] = useState<Character>(Character.content);
  const [modalText, setModalText] = useState<any>(<div />);
  const isMobile = useIsMobile();
  const selectHandler = () => {
    if (selector) {
      self.location = `/${selector}` as any;
    }
  };
  const confirm = () => {
    const tempModalText = (
      <div>
        แน่ใจแล้วหรอว่าจะสมัครสาขา
        <br />
        {`"Web ${selector[0].toUpperCase()}${selector.substr(1)}"`}
        <br />
      </div>
    );
    setModalText(tempModalText);
    console.log(modalText);
    setIsToggle(!toggle);
    setField(selector);
  };

  const DesktopContent = (
    <Row>
      <Card>
        <CharacterCard
          active={selector === Character.content}
          onClick={() => setSelector(Character.content)}
          src="/images/content.png"
        />
        <Description>Web Content</Description>
      </Card>
      <Card>
        <CharacterCard
          active={selector === Character.design}
          onClick={() => setSelector(Character.design)}
          src="/images/design.png"
        />
        <Description>Web Design</Description>
      </Card>
      <Card>
        <CharacterCard
          active={selector === Character.marketing}
          onClick={() => setSelector(Character.marketing)}
          src="/images/marketing.png"
        />
        <Description>Web Marketing</Description>
      </Card>
      <Card>
        <CharacterCard
          active={selector === Character.programming}
          onClick={() => setSelector(Character.programming)}
          src="/images/programming.png"
        />
        <Description>Web Programming</Description>
      </Card>
    </Row>
  );
  const move = (direction: "left" | "right") => {
    const majors = [
      Character.content,
      Character.design,
      Character.marketing,
      Character.programming
    ];
    if (direction === "left") {
      setSelector(
        majors[
          (majors.findIndex(major => major === selector) + 1) % majors.length
        ]
      );
    } else {
      setSelector(
        majors[
          majors.findIndex(major => major === selector) - 1 < 0
            ? majors.length - 1
            : majors.findIndex(major => major === selector) - 1
        ]
      );
    }
  };
  const MobileContent = (
    <Row>
      <div
        onClick={() => move("left")}
        style={{ position: "absolute", top: "50%", left: "0" }}
      >
        <FontAwesomeIcon
          icon="angle-left"
          style={{ color: "#ffbc5f", fontSize: "3em", cursor: "pointer" }}
        />
      </div>
      <Card>
        <CharacterCard active={true} src={`/images/${selector}.png`} />
        <Description>
          Web {selector[0].toUpperCase() + selector.substr(1)}
        </Description>
      </Card>
      <div
        onClick={() => move("right")}
        style={{ position: "absolute", top: "50%", right: "0" }}
      >
        <FontAwesomeIcon
          icon="angle-right"
          style={{ color: "#ffbc5f", fontSize: "3em", cursor: "pointer" }}
        />
      </div>
    </Row>
  );
  return (
    <Container>
      <Modal
        field={field}
        toggle={toggle}
        text={modalText}
        setToggle={setIsToggle}
        confirm={selectHandler}
      />
      {isMobile ? MobileContent : DesktopContent}
      <Button onClick={() => confirm()}>ยืนยันสาขา</Button>
    </Container>
  );
};
