'use client'

import { ActionResult, handleSignIn } from './actions';
import React, { FC } from 'react';
import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


interface FormSignInProps {
    
}

const initialFormState : ActionResult = {
    errorTitle: null,
    errorDesc: []
}

const FormSignIn: FC<FormSignInProps> = ({ }) => {

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
            <form action={formAction} className='space-y-4'>
                <Input  className='w-full p-2 border-2 border-gray-300 rounded-md shadow-md focus:border-blue-500 focus:shadow-lg focus:outline-none 'type="email" placeholder='email' name='email'/>
                <Input className='md:w-full md:max-w-sm p-2 border-2 border-gray-300 rounded-md shadow-md focus:border-blue-500 focus:shadow-lg focus:outline-none' type="password" placeholder='password' name='password' />

                <Button className='w-full' type='submit'>
                    Submit
                </Button>
            </form>
            </div>
        </div>
    </div>
    )
 }

export default FormSignIn;