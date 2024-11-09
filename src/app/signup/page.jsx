"use client"
import Header from '../_components/Header'
import SignUpForm from './_SignUpForm'

const SignUp = () => {

  return (

    <>
        <Header />
        <div className="max-w-4xl mx-auto mb-16 font-[sans-serif] p-6">
            <div className='text-4xl text-gray-900 dark:text-gray-200 font-bold my-9'>
                <h1 className='text-center'> Sign Up </h1>
            </div>

            <SignUpForm />

        </div>
    </>

  )
}

export default SignUp