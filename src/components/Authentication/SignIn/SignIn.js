import React, { useState } from "react";
// import Axios from "axios";
import { useNavigate } from "react-router-dom";
import auth from "../Auth/auth";
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './sign-in';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignin = e => {
        e.preventDefault();
        try {
            auth.signin(email, password).then(
                () => {
                    navigate("/dashboard");
                    // window.location.reload();
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>BookStore</Icon>
                    <FormContent>
                        <Form onSubmit={handleSignin}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                            <FormButton type='submit'>SignIn</FormButton>
                            <Text>OR</Text>
                            <FormButton type='#'>SignUp</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignIn;
