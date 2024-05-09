// LoginSignUpPage.js
import { useState } from 'react';
import Login from './Getin/Login';
import SignUp from './Getin/SignUp';

const GetIn = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='overflow-y-hidden'>
    {isLogin ? <Login toggleForm={toggleForm} /> : <SignUp toggleForm={toggleForm} />}
  </div>
);
};

export default GetIn;
