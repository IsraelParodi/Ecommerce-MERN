import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Input from "../../Components/Input";

const SignUp = (props) => {
  return (
    <div className="mt-4 w-50 mx-auto">
      <Form>
        <Row>
          <Col md={6}>
            <Input
              label="First Name"
              placeholder="First Name"
              type="text"
              value=""
              onChange={() => {}}
            />
          </Col>
          <Col md={6}>
            <Input
              label="Last Name"
              placeholder="Last Name"
              type="text"
              value=""
              onChange={() => {}}
            />
          </Col>
        </Row>
        <Input
          label="Email"
          placeholder="Email"
          type="text"
          value=""
          onChange={() => {}}
        />
        <Input
          label="Password"
          placeholder="Password"
          type="text"
          value=""
          onChange={() => {}}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
