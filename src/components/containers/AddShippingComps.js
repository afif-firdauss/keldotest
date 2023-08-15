import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { post } from 'utils/service';
import { Input } from 'components/atoms/Input';
import ErrorAlert from 'components/atoms/ErrorAlert';
import Button from 'components/atoms/Button';
import { showErrorMessage, showSuccessMessage } from 'utils/alert';

export default function AddShippingComps() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'all'
  });

  const onSubmit = (data) => {
    setLoading(true);

    post('/finance/shippingComps', data).then((res) => {
      showSuccessMessage(res?.message);
      setLoading(false);
      navigate('/shipping-comps');
    }).catch((err) => {
      showErrorMessage(err.response.data?.message);
      setLoading(false);
    })
  };

  return (
    <div className='bg-white flex flex-col rounded-xl p-6 w-full h-full'>
      <h1 className='text-black font-bold text-xl'>Tambah Shipping Comps</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
        <div className='w-80'>
          <Input 
            label="Nama"
            id="name"
            name="name"
            type="name"
            inputClass="mt-5"
            {...register("name", { 
              required: true, 
              minLength: 2
            })}
          />
          {errors.name?.type === 'required' && <ErrorAlert title="Nama harus diisi!" />}
          {errors.name?.type === 'minLength' && <ErrorAlert title="Minimal 2 karakter!" />}
        </div>

        <div className='mt-5'>
          <Button
            title={loading ? "Loading..." : "Simpan"}
            disabled={loading}
            className="bg-blue-800 px-6 text-white rounded-md py-2 mt-3 hover:bg-blue-700 disabled:cursor-not-allowed"
            type="submit" />
        </div>
      </form>
    </div>
  )
}
