import { Metadata } from 'next';
import React, { FC } from 'react';
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