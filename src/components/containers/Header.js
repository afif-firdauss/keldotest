import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import avatar from 'assets/avatar.png';

export default function Header({ title, titleClass, menu, ...rest }) {
  const data = useSelector(state => state.user.userInfo);

  const [activeMenu, setActiveMenu] = useState('login');

  return (
    <header className="flex justify-between align-middle bg-blue-800 px-10 h-16 absolute w-full">
      <div className={titleClass}>{title}</div>
      <div className='flex gap-4'>
        {menu && !data ? menu?.map(menu => {
          return (
            <Link key={menu?.id} to={menu?.url} className={menu?.url === activeMenu ? 'bg-black' : ''}>
              <button
                type='button'
                className='text-white grid content-center h-full px-4'
                onClick={() => setActiveMenu(menu?.url)}
                {...rest}
              >
                {menu?.title}
              </button>
            </Link>
          )
        }) : (
          <div className='my-auto text-white flex align-middle gap-4'>
            <img src={avatar} alt="" width={24} height={24} className='rounded-full object-cover ring-2 ring-offset-2' />
            <span>{data?.user?.name}</span>
          </div>
        )}
      </div>
    </header>
  )
}
