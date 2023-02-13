import React from "react";
import Button from "react-bootstrap/Button";

const PrimaryButton = (props) => {
  return (
    <>
      <Button variant="flat ml-">{props.text}</Button>
    </>
  );
};

export default PrimaryButton;
