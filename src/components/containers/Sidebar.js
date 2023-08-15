import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logout from 'assets/logout.svg'
import truckActive from 'assets/truck-active.svg'
import truck from 'assets/truck.svg'
import homeActive from 'assets/home-active.svg'
import home from 'assets/home.svg'
import { clearUser } from 'redux/createSlice';
import Cookies from 'universal-cookie';

export default function Sidebar({ active }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const [activeMenu, setActiveMenu] = useState(active);

  const onChangeMenu = (menu) => {
    setActiveMenu(menu);
    navigate(`/${menu}`)
  };

  const handleLogout = () => {
    dispatch(clearUser());
    cookies.remove('token');
    navigate('/login');
  };

  return (
    <div className=" bg-gray-200 pt-20 w-1/5 text-black flex flex-col">
      <ul className="mt-4 space-y-2 px-5">
        <li className='flex gap-2 mb-3 cursor-pointer' onClick={() => onChangeMenu('dashboard')}>
          <img src={activeMenu === 'dashboard' ? homeActive : home} alt="" width={24} height={24} />
          Dashboard
        </li>
        <li className='flex gap-2 cursor-pointer' onClick={() => onChangeMenu('shipping-comps')}>
          <img src={activeMenu === 'shipping-comps' ? truckActive : truck} alt="" width={24} height={24} />
          Shipping Comps
        </li>
      </ul>

      <div className='mt-auto bg-blue-800 p-3 text-white'>
        <button className='flex justify-center w-full' onClick={handleLogout}>
          <img src={logout} alt="" width={24} height={24} className='mr-2' />
          Logout
        </button>
      </div>
    </div>
  )
}
