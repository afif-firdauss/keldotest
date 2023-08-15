import React from 'react';
import addIcon from 'assets/add.svg';
import SearchBox from 'components/atoms/SearchBox';
import { Link } from 'react-router-dom';

export default function ShippingComps({ shippingList, loading, query, setQuery }) {
  const isLoading = () => {
    return (
      <tr>
        <td className='p-2 cursor-pointer font-semibold text-center'>Loading...</td>
      </tr>
    )
  }

  return (
    <div className='bg-white flex flex-col rounded-xl p-6 w-full h-full'>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <h1 className='text-black font-bold text-xl'>Shipping Comps</h1>
          <Link to='/add-shipping-comps'>
            <img src={addIcon} alt="" width={24} height={24} className='cursor-pointer' />
          </Link>
        </div>

        <div className='mt-2'>
          <SearchBox
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search comps..." />
        </div>
      </div>

      <div className='mt-5 overflow-auto'>
        <table className='w-full text-left'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='text-gray-600 text-xl p-2'>Nama</th>
            </tr>
          </thead>

          <tbody>
            {shippingList && !loading ? shippingList?.map((data) => {
              return (
                <Link key={data?.id} to={`/update-shipping-comps/${data?.id}`} state={{ data: data }} className='flex-col flex w-full hover:bg-gray-100'>
                  <tr>
                    <td className='p-2 cursor-pointer font-semibold'>{data?.name}</td>
                  </tr>
                </Link>
              )
            }) : (
              isLoading()
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
