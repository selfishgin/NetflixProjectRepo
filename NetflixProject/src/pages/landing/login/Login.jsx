import React, { useState } from 'react';
import Form from '/src/common/Form.jsx';
import { useNavigate } from 'react-router';
import { themeStore } from 'common/Store.js';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const addAccessToken = themeStore((state) => state.addAccessToken);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { t } = useTranslation();


  const login = async () => {
    if (!formData.email || !formData.password) {
      toast.error('Please fill out all fields.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/v1/auth/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        addAccessToken(data.token);
        navigate('/home');
      } else {
        toast.error(data.message || 'Login failed', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error('An error occurred, please try again later.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
      console.error(error);
    }
  };

  const formItems = [
    {
      label: '',
      name: 'email',
      type: 'email',
      placeholder: t('emailPlaceholder'),
      inputStyle: 'p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white',
    },
    {
      label: '',
      name: 'password',
      type: 'password',
      placeholder: t('passwordPlaceholder'),
      inputStyle: 'p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white',
    },
  ];

  const formButtons = [
    {
      // title: 'Sign In',
      title: t('signIn'),
      style: 'bg-[#E50914] text-white font-medium py-3 rounded-[4px] w-full',
      action: login,
    },
    {
      title: t('newToNetflixSignUp'),
      style: 'text-zinc-300 w-full mt-[25px]',
      action: () => {
        navigate('/signup');
      },
    },
  ];

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('src/assets/NetflixBackground.jpg')]">
      <ToastContainer />
      <button onClick={() => navigate('/')}>
        <img
          className="w-[90px] md:w-[120px] lg:w-[160px] absolute top-[24px] left-[168px]"
          src="src/assets/NetflixLogo.png"
          alt="Netflix Logo"
        />
      </button>
      <Form
        headerText={{
          title: t('signIn'),
          style: 'text-white font-bold text-[32px]',
        }}
        formItems={formItems}
        setFormData={setFormData}
        formButtons={formButtons}
        formStyle="w-[450px] h-[470px] bg-black/70 px-[68px] pt-[48px] flex flex-col gap-4 rounded-[4px]"
      />
    </div>
  );
};

export default Login;
