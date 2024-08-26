import React, { FC } from 'react';
interface SignInPageProps {

}

export const metadata: Metadata = {
    title: 'Dashboard | Login'
}

const SignInPage: FC<SignInPageProps> = ({ }) => {
    return (
        <div className=' w-full h-screen'>
            <div className="flex min-h-full flex-i flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
            </div>
            JANCOKK
        </div>
    )
}


export default SignInPage;