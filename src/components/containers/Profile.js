import React from 'react';
import avatar from 'assets/avatar.png';

export default function Profile() {
  return (
    <div className='mx-auto'>
      <h1 className='text-3xl font-bold text-center'>Profile</h1>

      <div className='border-gray-400 border-2 rounded-md mt-5 p-6 bg-gray-100 gap-5 flex'>
        <div>
          <div className='text-gray-600 text-md font-semibold'>Nama</div>
          <div className='text-black text-md font-semibold'>Afif Firdaus</div>

          <div className='text-gray-600 text-md font-semibold mt-5'>Alamat</div>
          <div className='text-black text-md font-semibold'>
            Jln H Niming, Kembangan, Jakarta Barat
          </div>

          <div className='text-gray-600 text-md font-semibold mt-5'>No. HP</div>
          <div className='text-black text-md font-semibold'>
            +62 853 7253 1850
          </div>

          <div className='text-gray-600 text-md font-semibold mt-5'>Email</div>
          <div className='text-black text-md font-semibold'>
            afif.firdaus94@gmail.com
          </div>

          <div className='text-gray-600 text-md font-semibold mt-5'>Motto</div>
          <div className='text-black text-md font-semibold'>
            Code with Purpose, Create with Passion.
          </div>
        </div>

        <div>
          <img src={avatar} alt="" width={100} height={100} className='rounded-full object-cover' />
        </div>
      </div>
    </div>
  )
}
