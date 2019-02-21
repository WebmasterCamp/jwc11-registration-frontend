import { connect } from "react-redux";
import { clearMajor } from "../ducks/submission";
import TransparentButton from "./TransparentButton";
import { Fragment, useState } from "react";
import Modal from "./Modal";
import { getMajorFromPath } from "../core/util";

export default connect(
  null,
  { clearMajor }
)(({ clearMajor }) => {
  const [toggle, setIsToggle] = useState<boolean>(false);
  const confirm = () => {
    setIsToggle(!toggle);
  };
  return (
    <Fragment>
      <Modal
        field={getMajorFromPath()}
        toggle={toggle}
        setToggle={setIsToggle}
        confirm={clearMajor}
      />
      <TransparentButton color="white" onClick={confirm} type="button">
        เปลี่ยนสาขา
      </TransparentButton>
    </Fragment>
  );
});
