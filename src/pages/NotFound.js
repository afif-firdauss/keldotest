import Button from 'components/atoms/Button';
import React from 'react';
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="grid content-center h-full text-center">
      <h1 className='text-4xl font-bold'>404<br/><span>Not Found</span></h1>
      <Link to="/login" >
        <Button
          title="Back to Login"
          className="bg-blue-800 hover:bg-blue-700 text-white py-1 px-5 mt-3 rounded-full" />
      </Link>
    </div>
  )
}