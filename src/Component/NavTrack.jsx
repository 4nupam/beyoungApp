import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { useNavigate } from 'react-router';


const NavTrack = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSign,setIsSign] = useState(false);
  const navigate = useNavigate('')

  const handleLogin = () => {
    setIsOpen(!isOpen);
  };
  const handleSingup =()=>{
    setIsSign(!isSign);
  }

  return (
    <div className='relative flex items-center justify-between p-2 bg-black text-white text-sm'>
      <div className="left flex items-center gap-2 cursor-pointer font-bold ml-8" onClick={()=>navigate('/TrackingPackage')}>
        <FaLocationDot />
        <span>Track Your Order</span>
      </div>

      <div className="right flex items-center gap-2 mr-8">
        <button onClick={handleLogin}>LOG IN</button>
        |
        <button onClick={handleSingup}>SIGN UP</button>
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
          <Login close={handleLogin} />
        </div>
      )}
      {isSign && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
        <Signup close={handleSingup} />
      </div>
      )}
    </div>
  );
};

export default NavTrack;
