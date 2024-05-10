import React from 'react'
import SignupForm from './SignupForm'
import SignInForm from './SignInForm'


function SignUp() {
    return (
        <section className="flex gap-6 p-5">
            <SignupForm />
            <SignInForm />
        </section>

    )
}

export default SignUp