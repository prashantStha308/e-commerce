import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../_store/UserContext';
import Modal from '../_components/Modal';
import Loading from '../_components/loading';

const SignUpForm = () => {

    const router = useRouter();
    const { signUp } = useUser();

    const [isLoading , setIsLoading] = useState(false);
    const [ modal , setModal ] = useState({
        isOpen : false,
        title: "",
        message: ""
    });

    const userCreation = async (userData)=>{
        
        setIsLoading(true)

        const { status , status_code , message } = await signUp(userData);

        setIsLoading(false)

        if( status_code === 201 ){
            setModal({ isOpen: true , title: "User Created" , message: "User Creation Successfull." });
            router.back();

        } else if( status_code === 400 ){ //if bad request

            if( message.includes('email') ){

                setModal({ isOpen: true , title: "Email Exists" , message: "There is another account with the submitted email" });

            }else if( message.includes('username') ){

                setModal({ isOpen: true , title: "Pick another Username" , message: " User with this user name exists. Please pick a different Username " })

            }else{

                setModal({ isOpen: true , title: "Unexpected Error" , message: " An unexpected error has occured " })

            }

        } else{

            setModal({ isOpen: true , title: "Unexpected Error" , message: " An unexpected error has occured " })
        }
    }

    const handelModalClose = ()=>{
        setModal({
            isOpen: false,
            title: "",
            message: ""
        })
    }

    const handleForm = async (e)=>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        // User Object
        const userData = {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            username: formData.get('username'),
            email: formData.get('email'),
            billing: {
                phone: formData.get('phone'),
                country: formData.get('country'),
                city: formData.get('city'),
                email: formData.get('email'),
                state: formData.get('state'),
                first_name: formData.get('first_name'),
                last_name: formData.get('last_name'),
                company: formData.get('company'),
                postcode: formData.get('postcode'),
                address_1: "",
                address_2: "",
            },
            shipping:{
                phone: formData.get('phone'),
                country: formData.get('country'),
                city: formData.get('city'),
                email: formData.get('email'),
                state: formData.get('state'),
                first_name: formData.get('first_name'),
                last_name: formData.get('last_name'),
                company: formData.get('company'),
                postcode: formData.get('postcode'),
                address_1: "",
                address_2: "",
            },
            is_paying_customer: "",
            avatar_url: "https://secure.gravatar.com/avatar/52168962f3d5dfc43a30c789f8fc03ef?s=96&d=mm&r=g",
        }
        userCreation(userData)
    }

  return (
    <>
        { isLoading && <Loading styles={'signup-loader'} /> }
        <form onSubmit={handleForm}>
            <div className="grid sm:grid-cols-2 gap-8">
                <div>
                    <label className="signup-form-inputs">First Name*</label>
                    <input name="first_name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all" placeholder="Enter name" required />
                </div>

                <div>
                    <label className="signup-form-inputs">Last Name*</label>
                    <input name="last_name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all" placeholder="Enter last name" required/>
                </div>

                <div>
                    <label className="signup-form-inputs">User Name*</label>
                    <input name="username" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all" placeholder="Enter user name" required />
                </div>
                
                <div>
                    <label className="signup-form-inputs">Email Id*</label>
                    <input name="email" type="email" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all" placeholder="Enter email" required />
                </div>

                <div>
                    <label className="signup-form-inputs">Mobile No.*</label>
                    <input name="phone" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all" placeholder="Enter mobile number" required/>
                </div>

                <div>
                    <label className="signup-form-inputs">Company name</label>
                    <input name="company" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all" placeholder="Enter your Company" />
                </div>

                <div>
                    <label className="signup-form-inputs">Country*</label>
                    <input name="country" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all" placeholder="Enter your Country" required/>
                </div>

                <div>
                    <label className="signup-form-inputs">State</label>
                    <input name="state" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all" placeholder="Enter your State" />
                </div>

                <div>
                    <label className="signup-form-inputs">City*</label>
                    <input name="city" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all" placeholder="Enter your City" required />
                </div>

                <div>
                    <label className="signup-form-inputs">Post code*</label>
                    <input name="postcode" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all" placeholder="Enter your Post code" required />
                </div>

                <div>
                    <label className="signup-form-inputs">Password*</label>
                    <input name="password" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all" placeholder="Enter password" required/>
                </div>

                

            </div>

            <div className="!mt-12">
                <input type="submit" value={"Sign Up"} className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" />
            </div>
        </form>
        {
            modal.isOpen && <Modal onClose={handelModalClose} title={modal.title} message={modal.message} />
        }
    </>
  )
}

export default SignUpForm