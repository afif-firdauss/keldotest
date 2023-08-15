import Button from 'components/atoms/Button'
import ErrorAlert from 'components/atoms/ErrorAlert';
import { Input } from 'components/atoms/Input'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/createSlice';
import { post } from 'utils/service';
import Cookies from 'universal-cookie';
import { showErrorMessage } from 'utils/alert';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const [loading, setLoading] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'all'
  });

  const onSubmit = (data) => {
    setLoading(true);

    post('/authentication/login', data).then((res) => {
      dispatch(setUser(res?.data));
      cookies.set('token', res?.data?.data?.access_token);
      setLoading(false);
      navigate('/dashboard');
    }).catch((err) => {
      showErrorMessage(err.response.data?.message);
      setLoading(false);
    })
  };

  return (
    <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-3xl font-bold text-center'>Login</h1>

      <div className='border-gray-400 border-2 rounded-md mt-5 p-6 bg-gray-100 flex-col flex w-96'>
        <Input
          label="Email"
          id="email"
          name="email"          
          {...register("email", { 
            required: true, 
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })}
        />
        {errors.email?.type === 'required' && <ErrorAlert title="Email harus diisi!" />}
        {errors.email?.type === 'pattern' && <ErrorAlert title="Email tidak valid" />}

        <Input 
          label="Password"
          id="password"
          name="password"
          type="password"
          inputClass="mt-5"
          {...register("password", { required: "Password harus diisi!" })} 
        />
        {errors.password && <ErrorAlert title={errors.password?.message} />}

        <div className='mt-10 flex flex-col text-center'>
          <Button
            title={loading ? "Loading..." : "Login"}
            disabled={loading}
            className="bg-blue-800 px-6 text-white rounded-full py-2 mt-3 hover:bg-blue-700"
            type="submit" />
        </div>
      </div>
    </form>
  )
}
