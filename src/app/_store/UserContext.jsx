"use client"
import { configDotenv } from "dotenv";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


configDotenv();
// API keys
const KEY = process.env.NEXT_PUBLIC_KEY;
const SECRET = process.env.NEXT_PUBLIC_SECRETS;
const apiURL = process.env.NEXT_PUBLIC_URL;

const UserContext = createContext();


export const UserContextProvider =  ({ children }) => {

    const [ isLogged , setIsLogged ] = useState(false);
    const [ currentUser , setCurrentUser ] = useState({});

    // createUser function
  const createUser = async ( userData )=>{
    console.log(`${apiURL}wc/v3/customers?consumer_key=${KEY}&consumer_secret=${SECRET}`)
    try {
        const res = await axios.post( `${apiURL}wc/v3/customers?consumer_key=${KEY}&consumer_secret=${SECRET}` , userData );
        if( res.status === 201 ){
            return{ status: "success" , status_code: res.status , message: "User Created Successfully" }

        } else if( res.code === 'registration-error-email-exists' ){
          return{ status: 'failed' , status_code: res.status , message: 'registration-error-email-exists' }

        } else if( res.code === 'registration-error-username-exists' ){
          return { status: 'failed' , status_code: res.status , message: 'registration-error-username-exists' }

        } else{
          return{ status: "failed" , status_code: res.status , message: "Unexpected Error"};
        }
    }
    catch (error) {
      console.log(error.response?.data.data.status)
      console.log(error.response?.data.status )
      return{ status: "failed" , status_code: error.response?.data.data.status , message: error.response?.data.message };
    }
  }

  // Gets all existing users
  const getUsers = async () => {
    try {
      const res = await axios.get(`${apiURL}wc/v3/customers?consumer_key=${KEY}&consumer_secret=${SECRET}`);
      if (res.status === 200) {
        return { status: "success", data: res.data, message: "Users Found" };
      }
    } catch (error) {
      console.log("Error fetching users:", error.response?.data);
      return { status: "failed", data: null, message: error.response?.data };
    }
  };
  
//   Find the target user
  const findTargetUser = async (email, password) => {
    try {
      const { status, data } = await getUsers();
  
      if (status !== "success" || !data) {
        console.log("Unexpected response structure from getUsers");
        return { status: "failed", data: null, message: "Unexpected response structure" };
      }
    //   Find Target
      const target = data.find(item => item?.email === email);
  
      if (target) {
        return { status: "found", data: target, message: "User found" };
      } else {
        return { status: "not_found", data: null, message: "User not found" };
      }
    } catch (error) {
      console.log("Error in finding user:", error.response?.data);
      return { status: "failed", data: null, message: error.response?.data };
    }
  };

  // Log In
  const signIn = async (email, password)=>{
    const { status , data , message } = await findTargetUser(email, password);
    if( status === 'found' ){
      setCurrentUser(data);
      setIsLogged(true);
      localStorage.setItem( "currentUser", JSON.stringify(data) );
      localStorage.setItem( "isLogged", "true" );
    }

    return { status: status , data: data , message: message };
  }

  // Sign Up
  const signUp = async ( userData )  =>{
    const { status ,  status_code , message } = await createUser(userData);

    if(status === 'success'){
      setCurrentUser(userData);
      setIsLogged(true);
      localStorage.setItem( "currentUser", JSON.stringify(userData) );
      localStorage.setItem( "isLogged", "true" );
    }

    return { status: status , status_code: status_code , message: message };
  }

  useEffect( ()=>{
    const storedUser =  JSON.parse(localStorage.getItem("currentUser"));
    const loggedStatus = localStorage.getItem("isLogged") === "true";

    if(storedUser){
      setCurrentUser(storedUser)
    }
    setIsLogged(loggedStatus);
  }, [] )

  // Deletes user of ID: customer_id
  const deleteUser = async ( customer_id ) =>{

    console.log(`${apiURL}wc/v3/customers/${customer_id}?consumer_key=${KEY}&consumer_secret=${SECRET}&force=true`);
    try {
      const res = await axios.delete(`${apiURL}wc/v3/customers/${customer_id}?consumer_key=${KEY}&consumer_secret=${SECRET}&force=true`,);
      if(res.status === 200){
        console.log("Deleteion Successfull")
        return res.data
      }
    } catch (error) {
      console.log(error.response?.data)
      return error.response?.data
    }
  }
  

  return(
    <UserContext.Provider value={{
        signUp,
        signIn,
        deleteUser,
        isLogged,
        currentUser,
    }}>
        {children}
    </UserContext.Provider>
  )
}

// Custom Hooks
export const useUser = () =>  useContext(UserContext);