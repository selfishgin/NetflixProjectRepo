import { input, style } from 'motion/react-client'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router'
import { toast } from 'react-toastify'


const SignUp = () => {
    const location = useLocation();
    const email = location.state?.email;
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})

    const signup = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/v1/auth/signup", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok) {
                toast.success("User successfully registered", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
                navigate("/login", { state: { email: formData.email } })
            } else {
                toast.error(data.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            }
        } catch (error) {
            console.error(error)
        }
    }

    const formItems = [
        {
            label: "",
            name: "username",
            type: "text",
            placeholder: "Username",
            inputStyle: "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white"
        },
        {
            label: "",
            ...(email ? { value: email } : {}),
            name: "email",
            type: "email",
            placeholder: "Email",
            inputStyle: "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white"
        },
        {
            label: "",
            name: "password",
            type: "password",
            placeholder: "Password",
            inputStyle: "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white"
        },
    ]

    const formButtons = [
        {
            title: "Sign Up",
            style: "bg-[#E50914] text-white font-medium py-3 rounded-[4px] w-full",
            action: signup
        },
        {
            title: "Already member? Sign in now",
            style: "text-zinc-300 w-full mt-[25px]",
            action: () => { navigate('/signin') }
        },
    ]


    return (
        /* src/assets/NetflixLogo.png is an image source link to navigate '/' */
        /* src/assets/NetflixBackground.png is an image source link to bg-url */
        <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('src/assets/NetflixBackground.jpg')]">
            <button onClick={() => {
                navigate('/')
            }}>
                <img className='w-[90px] md:w-[120px] lg:w-[160px] absolute top-[24px] left-[168px]' src="src/assets/NetflixLogo.png" alt="" />
            </button>
            <Form
                headerText={
                    {
                        title: "Sign Up",
                        style: "text-white font-bold text-[32px]"
                    }
                }
                formItems={formItems}
                setFormData={setFormData}
                formButtons={formButtons}
                formStyle="w-[450px] h-[470px] bg-black/70 px-[68px] pt-[48px] flex flex-col gap-4 rounded-[4px]"
            />
        </div>
    )
}

export default SignUp