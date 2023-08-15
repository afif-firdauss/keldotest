import React from 'react';

export default function SearchBox({ ...rest }) {
  return (
    <input className='outline-none border-2 p-2 rounded-md text-sm' type='search' {...rest} />
  )
}
