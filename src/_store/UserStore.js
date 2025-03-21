import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// API keys (NEXT_PUBLIC_ variables are automatically available in the client)
const KEY = process.env.NEXT_PUBLIC_KEY;
const SECRET = process.env.NEXT_PUBLIC_SECRETS;
const apiURL = process.env.NEXT_PUBLIC_URL;


export const getUserByEmail =  async (email) => {
    try {
        const res = await axios.get(`${apiURL}wc/v3/customers`, {
            params: {
                consumer_key: KEY,
                consumer_secret: SECRET,
                email: email,
            },
        });

        if (res.status === 200 && res.data.length > 0) {
            return { status: "found", data: res.data[0], message: "User found" };
        } else {
            return { status: "not_found", data: null, message: "User not found" };
        }
    } catch (error) {
        console.error("Error fetching user by email:", error.response?.data);
        return { status: "failed", data: null, message: error.response?.data };
    }
}

export const getUserById =  async (id) => {
    try {
        const res = await axios.get(`${apiURL}wc/v3/customers/${id}`, {
            params: {
                consumer_key: KEY,
                consumer_secret: SECRET,
            },
        });

        if (res.status === 200) {
            return { status: "found", data: res.data, message: "User found" };
        } else {
            return { status: "not_found", data: null, message: "User not found" };
        }
    } catch (error) {
        console.error("Error fetching user by ID:", error.response?.data);
        return { status: "failed", data: null, message: error.response?.data };
    }
}

// Zustand Store
const UserStore = create(
  persist(
    (set) => ({
      user: {},
      isLogged: false,

      setUser: (user) => set({ user }),
      setIsLogged: (isLogged) => set({ isLogged }),

        createUser: async (userData) => {
            try {
                if (!userData.title || !userData.address) {
                    throw new Error("Required Fields not filled");
                }
                const res = await axios.post(
                    `${apiURL}wc/v3/customers`,
                    userData,
                    {
                        params: {
                        consumer_key: KEY,
                        consumer_secret: SECRET,
                        },
                    }
                );
                if (res.status !== 201) {
                    throw new Error(res.code);
                }

                console.log(res.status); // Debugging

                set({ user: userData });

                return {
                    status: "success",
                    message: res.status || "User Created Successfully",
                };
            } catch (error) {
                return {
                    status: "failed",
                    message: error.response?.data.message || "Unexpected Error occurred",
                };
            }
        },

        // Log In
        signIn: async (email) => {
            console.log("Email:", email);
            // console.log("Password:", password);
        
            try {
                const res = await getUserByEmail(email);
        
                // Check if user data is found
                if (!res.data) {
                    throw new Error("User not found");
                }
        
                // Check if password matches
                // if (res.data.password !== password) {
                //     throw new Error("Invalid password");
                // }
        
                if (res.status !== "found") {
                    throw new Error(res.message);
                }
        
                const data = res.data;
                set({ user: data, isLogged: true });
        
                return { status: res.status, data: data, message: res.message };
            } catch (error) {
                return {
                    status: "failed",
                    data: null,
                    message: error.message || "Unexpected Error occurred",
                };
            }
        },

        signOut: () => {
            set({
                user: {
                    first_name: "",
                    last_name: "",
                    username: "",
                    email: "",
                    billing: {
                        phone: 0,
                        country: "",
                        city: "",
                        email: "",
                        state: "",
                        first_name: "",
                        last_name: "",
                        company: "",
                        postcode: "",
                        address_1: "",
                        address_2: "",
                    },
                    shipping:{
                        phone: 0,
                        country: "",
                        city: "",
                        email: "",
                        state: "",
                        first_name: "",
                        last_name: "",
                        company: "",
                        postcode: 0,
                        address_1: "",
                        address_2: "",
                    },
                    is_paying_customer: "",
                    avatar_url: "https://secure.gravatar.com/avatar/52168962f3d5dfc43a30c789f8fc03ef?s=96&d=mm&r=g",
                }
            });
            set({ isLogged: false });
        },


    }),
    {
      name: "user",
      getStorage: () => localStorage,
    }
  )
);

const useUserStore = ()=> UserStore();

export default useUserStore;
