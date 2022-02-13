import React from "react";
import { Container } from "react-bootstrap";
import MainNavbar from "./MainNavbar";

const layout = (props) => {
  return (
    <>
      <MainNavbar />
      <Container>{props.children}</Container>
    </>
  );
};

export default layout;
