import React from 'react'
import { SignUpForm } from "@/pages/signup/components/SignUpForm"
interface Props { }

function SignUp(props: Props) {
    const { } = props

    return (
        <div className='flex justify-center items-center w-full h-[100vh]'>
            <SignUpForm className='w-1/4' />
        </div>
    )
}

export default SignUp;
