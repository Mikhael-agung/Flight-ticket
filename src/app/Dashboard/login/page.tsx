import { Metadata } from 'next';
import React, { FC } from 'react';
import { ActionResult, handleSignIn } from './actions';
import { useFormState } from 'react-dom';
interface SignInPageProps {

}

export const metadata: Metadata = {
    title: 'Dashboard | Login'
}

const initialFormState : ActionResult = {
    errorTitle: null,
    errorDesc: []
}

const SignInPage: FC<SignInPageProps> = ({ }) => {

    const [state, formAction] =  useFormState(handleSignIn, initialFormState);
    console.log(state);

    return (
        <div className=' w-full h-screen'>
            <div className="flex min-h-full flex-i flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form action={handleSignIn} className='space-y-4'>
                    <input  className='w-full p-2 border-2 border-gray-300 rounded-md shadow-md focus:border-blue-500 focus:shadow-lg focus:outline-none 'type="email" placeholder='email' name='email' required/>
                    <input className='md:w-full md:max-w-sm p-2 border-2 border-gray-300 rounded-md shadow-md focus:border-blue-500 focus:shadow-lg focus:outline-none' type="password" placeholder='password' name='password' required/>

                    <button className='w-full' type='submit'>
                        Submit
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
} 


export default SignInPage;