import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "/src/common/Form.jsx";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get email from location state or default to an empty string
  const emailFromState = location.state?.email || "";
  const [formData, setFormData] = useState({
    email: emailFromState,
    username: "",
    password: "",
  });

  useEffect(() => {
    if (emailFromState) {
      setFormData((prev) => ({ ...prev, email: emailFromState }));
    }
  }, [emailFromState]);

  const signup = async () => {
    const { email, username, password } = formData;

    if (!username || !email || !password) {
      toast.error("Please fill out all fields", { position: "top-center" });
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/v1/auth/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("User successfully registered", { position: "top-center" });
        navigate("/login", { state: { email: formData.email } });
      } else {
        toast.error(data.message, { position: "top-center" });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
      });
      
    }
  };

  const formItems = [
    {
      label: "",
      name: "username",
      type: "text",
      placeholder: "Username",
      inputStyle: "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white",
    },
    {
      label: "",
      name: "email",
      type: "email",
      placeholder: "Email",
      value: formData.email,
      readOnly: !!emailFromState, // Make email read-only if passed via state
      inputStyle: "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white",
    },
    {
      label: "",
      name: "password",
      type: "password",
      placeholder: "Password",
      inputStyle: "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white",
    },
  ];

  const formButtons = [
    {
      title: "Sign Up",
      style: "bg-[#E50914] text-white font-medium py-3 rounded-[4px] w-full",
      action: signup,
    },
    {
      title: "Already a member? Sign in now",
      style: "text-zinc-300 w-full mt-[25px]",
      action: () => navigate("/login"),
    },
  ];

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('src/assets/NetflixBackground.jpg')]">
      <button onClick={() => navigate("/")}>
        <img
          className="w-[90px] md:w-[120px] lg:w-[160px] absolute top-[24px] left-[168px]"
          src="src/assets/NetflixLogo.png"
          alt="Netflix Home"
        />
      </button>
      <Form
        headerText={{
          title: "Sign Up",
          style: "text-white font-bold text-[32px]",
        }}
        formItems={formItems}
        setFormData={setFormData}
        formButtons={formButtons}
        formStyle="w-[450px] h-[470px] bg-black/70 px-[68px] pt-[48px] flex flex-col gap-4 rounded-[4px]"
      />
    </div>
  );
};

export default SignUp;
