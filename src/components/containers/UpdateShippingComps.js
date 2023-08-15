import React, { useState } from 'react';
import deleteIcon from 'assets/delete.svg';
import { useParams, useNavigate } from 'react-router-dom';
import { del, put } from 'utils/service';
import { useForm } from "react-hook-form";
import { Input } from 'components/atoms/Input';
import ErrorAlert from 'components/atoms/ErrorAlert';
import Button from 'components/atoms/Button';
import { showErrorMessage, showSuccessMessage } from 'utils/alert';
import Modal from './Modal';

export default function UpdateShippingComps({ name }) {
  const navigate = useNavigate();
  let { id } = useParams();
  
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'all',
    defaultValues: {
      name: name
    }
  });

  const onSubmit = (data) => {
    setLoading(true);

    put(`/finance/shippingComps/${id}`, data).then((res) => {
      showSuccessMessage(res?.message);
      setLoading(false);
      navigate('/shipping-comps');
    }).catch((err) => {
      showErrorMessage(err.response.data?.message);
      setLoading(false);
    })
  };

  const handleDeleteComps = (id) => {
    setLoading(true);

    del(`/finance/shippingComps/${id}`).then((res) => {
      showSuccessMessage(res?.message);
      setShowModal(false);
      setLoading(false);
      navigate('/shipping-comps');
    }).catch((err) => {
      setLoading(false);
      setShowModal(false);
      showErrorMessage(err.response.data?.message);
    })
  }

  return (
    <div className='bg-white flex flex-col rounded-xl p-6 w-full h-full'>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <h1 className='text-black font-bold text-xl'>Edit Shipping Comps</h1>
          <div onClick={() => setShowModal(true)}>
            <img src={deleteIcon} alt="" width={28} height={28} className='cursor-pointer' />
          </div>
        </div>
      </div>

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
            className="bg-blue-800 px-6 text-white rounded-md py-2 mt-3 hover:bg-blue-700"
            type="submit" />
        </div>
      </form>

      <Modal showModal={showModal} setShowModal={setShowModal} onSubmit={() => handleDeleteComps(id)} loading={loading} />
    </div>
  )
}
