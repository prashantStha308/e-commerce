"use client"
import Modal from "@/_components/Modal.jsx"
import Loading from "@/_components/loading.jsx"
import { useState } from "react";
import { useRouter } from "next/navigation"
import useUserStore from "@/_store/UserStore.js"

const SignUpClient = () => {

    const { createUser } = useUserStore();
    const router = useRouter();
    const [ isLoading , setIsLoading ] = useState(false);
    const [ isModal , setIsModal ] = useState({
        state: false ,
        message: "",
        title: ""
    });
    const [ formData , setFormData ] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        state: "",
        city: "",
        postcode: "",
        password: ""
    })

    const closeModal = () => {
        setIsModal({
            state: false ,
            message: "",
            title: "",
            login: false
        });
    }

    const handleInput = (e)=>{
        const { name , value } = e.target;
        setFormData({ ...formData , [name]: value });
    }

    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        console.log("Pressed signup");
        const phoneRegex = /^\d{10}$/;

        if( !formData.email || !formData.first_name || !formData.last_name || !formData.username ){
            setIsModal({
                state: true,
                title: "Please Fill up required fields",
                message: "Please Fill up the required fields to create an account"
            });
            return;
        }

        if( !phoneRegex.test( formData.phone ) ){
            setIsModal({
                state: true,
                title: "Invalid phone number",
                message: "Please enter a 10 digtit phone number",
                login: false
            });
            return;
        }

        const resetFormData = () => {
            setFormData({
                first_name: "",
                last_name: "",
                username: "",
                email: "",
                phone: "",
                company: "",
                country: "",
                state: "",
                city: "",
                postcode: "",
                password: ""
            });
        }

        const userData = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            username: formData.username,
            email: formData.email,
            billing: {
                phone: formData.phone,
                country: formData.country,
                city: formData.city,
                email: formData.email,
                state: formData.state,
                first_name: formData.first_name,
                last_name: formData.last_name,
                company: formData.company,
                postcode: formData.postcode,
                address_1: "",
                address_2: "",
            },
            shipping:{
                phone: formData.phone,
                country: formData.country,
                city: formData.city,
                email: formData.email,
                state: formData.state,
                first_name: formData.first_name,
                last_name: formData.last_name,
                company: formData.company,
                postcode: formData.postcode,
                address_1: "",
                address_2: "",
            },
            is_paying_customer: "",
            avatar_url: "https://secure.gravatar.com/avatar/52168962f3d5dfc43a30c789f8fc03ef?s=96&d=mm&r=g",
        }

        try{
            setIsLoading(true);
            const res = await createUser(userData);
            console.log(res);
            if( res.status === "success" ){
                resetFormData();
                router.back();
            }else{
                throw new Error(res.message);
            }
        }catch(error){
            setIsModal({
                state: true,
                title: "Failed creating user",
                message: error.message,
                login: error.message.includes("already registered with your email ") ? true : false
            })
        }finally{
            setIsLoading(false);
        }


    }

  return (
    <div className="max-w-4xl mx-auto mb-16 font-[sans-serif] p-6">
      <div className='text-4xl text-gray-900 dark:text-gray-200 font-bold my-9'>
        <h1 className='text-center'> Sign Up </h1>
      </div>

          {/*Sign up Form*/}
        <div>
          { isLoading && <Loading styles={'signup-loader'} /> }
            <form onSubmit={handleFormSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <label className="signup-form-inputs">First Name*</label>
                        <input name="first_name" type="text"
                            className="signin-input"
                            placeholder="Enter first name"
                            value={formData.first_name}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div>
                        <label className="signup-form-inputs">Last Name*</label>
                        <input name="last_name" type="text"
                            className="signin-input"
                            placeholder="Enter last name"
                            value={formData.last_name}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div>
                        <label className="signup-form-inputs">User Name*</label>
                        <input name="username" type="text"
                            className="signin-input"
                            placeholder="Enter user name"
                            value={formData.username}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div>
                        <label className="signup-form-inputs">Email Id*</label>
                        <input name="email" type="email"
                            className="signin-input"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div>
                        <label className="signup-form-inputs">Mobile No.*</label>
                        <input name="phone" type="tel"
                            className="signin-input"
                            placeholder="Enter mobile number"
                            value={formData.phone}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div>
                        <label className="signup-form-inputs">Company name</label>
                        <input name="company" type="text"
                            className="signin-input"
                            placeholder="Enter your Company"
                            value={formData.company}
                            onChange={handleInput}
                        />
                    </div>

                    <div>
                        <label className="signup-form-inputs">Country*</label>
                        <input name="country" type="text"
                            className="signin-input"
                            placeholder="Enter your Country"
                            value={formData.country}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div>
                        <label className="signup-form-inputs">State</label>
                        <input name="state" type="text"
                            className="signin-input"
                            placeholder="Enter your State"
                            value={formData.state}
                            onChange={handleInput}
                         />
                    </div>

                    <div>
                        <label className="signup-form-inputs">City*</label>
                        <input name="city" type="text"
                            className="signin-input"
                            placeholder="Enter your City"
                            value={formData.city}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div>
                        <label className="signup-form-inputs">Post code*</label>
                        <input name="postcode" type="text"
                            className="signin-input"
                            placeholder="Enter your Post code"
                            value={ formData.postcode }
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div>
                        <label className="signup-form-inputs">Password*</label>
                        <input name="password" type="password"
                            className="signin-input"
                            placeholder="Enter password" 
                            value={formData.password}
                            onChange = {handleInput}
                            required
                        />
                    </div>
                </div>

                <div className="!mt-12">
                  <input type="submit" value={"Sign Up"}className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none cursor-pointer" />
                </div>
            </form>
            {
                isModal.state && <Modal onClose={closeModal} title={isModal.title} message={isModal.message} login={ isModal.login } />
            }
        </div>

    </div>
  )
}

export default SignUpClient;