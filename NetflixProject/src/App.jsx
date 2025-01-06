import SignUp from 'pages/landing/signup/SignUp';
import Login from 'pages/landing/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Landing from 'pages/landing/Landing';
import Homepage from 'pages/landing/homepage/Homepage';
import NotFound from './common/NotFound';
import { useStore } from 'zustand';
import { themeStore } from 'common/Store.js';

function App() {
  const { token } = useStore(themeStore);

  return (
    <div className="max-w-[1440px] mx-auto h-full min-h-screen w-full transition duration-300 ease-in-out overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {token && <Route path="/home" element={<Homepage />} />}
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
