import React from "react";
import Button from "react-bootstrap/Button";

const SecondaryButton = (props) => {
  return (
    <>
      <Button variant="plain">{props.text}</Button>
    </>
  );
};

export default SecondaryButton;
