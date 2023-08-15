import React, { forwardRef } from 'react';

export const Input = forwardRef(({ label, inputClass, ...rest }, ref) => {
  return (
    <div className={`flex flex-col w-auto ${inputClass}`}>
      <label htmlFor={label} className='text-gray-600 text-md font-semibold'>{label}</label>
      <input className='border-slate-200 p-2 border-2 rounded-md focus:outline-none text-base text-gray-600' {...rest} ref={ref} />
    </div>
  );
});