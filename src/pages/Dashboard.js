import Sidebar from 'components/containers/Sidebar';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const data = useSelector(state => state.user.userInfo);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar active="dashboard" />

      <div className="flex-grow p-8 bg-gray-300 pt-20">
        <div className='bg-white flex flex-col rounded-xl p-6 w-full h-full'>
          <h1 className='text-black font-bold text-xl'>Dashboard</h1>
          <div className='bg-gray-300 my-auto mx-auto w-1/2 py-20'>
            <div className='text-center'>
              <h2 className='text-2xl font-bold text-gray-600'>Selamat Datang</h2>
              <h3 className='text-xl font-semibold text-gray-500 mt-3'>{data?.user?.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
