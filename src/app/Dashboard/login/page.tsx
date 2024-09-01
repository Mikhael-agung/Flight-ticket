import { Metadata } from 'next';
import React, { FC } from 'react';
import { ActionResult, handleSignIn } from './form/actions';
import { useFormState } from 'react-dom';
import FormSignIn from './form/index';
interface SignInPageProps {

}

export const metadata: Metadata = {
    title: 'Dashboard | Login'
}

const SignInPage: FC<SignInPageProps> = ({ }) => {
    return (
        <FormSignIn/>
    )
} 


export default SignInPage;