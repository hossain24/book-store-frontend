import React from 'react';
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
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>BookStore</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>SignIn</FormButton>
                            <Text>OR</Text>
                            <FormButton type='submit'>SignUp</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignIn;
