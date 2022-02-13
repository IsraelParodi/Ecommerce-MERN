import React from "react";
import {Form, Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {login} from "../../actions";
import {useDispatch} from "react-redux";

const SignIn = (props) => {

    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email: "israelps97@gmail.com",
            password: "123123"
        };
        dispatch(login(user));
    };

    return (
        <div className="mt-4 w-50 mx-auto">
            <Form onSubmit={userLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>
                <Container>
                    <div className="row align-items-center">
                        <Button variant="primary" type="submit" className="col-3">
                            Submit
                        </Button>
                        <div className="col-9 text-end">
              <span>
                Don't have an account? Sign up <Link to="/signup">Here</Link>
              </span>
                        </div>
                    </div>
                </Container>
            </Form>
        </div>
    );
};

export default SignIn;
