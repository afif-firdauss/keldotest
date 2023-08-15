import ShippingComps from 'components/containers/ShippingComps';
import Sidebar from 'components/containers/Sidebar';
import React from 'react';
import { useQuery } from 'react-query';
import { get } from 'utils/service';

export default function Shipping() {
  const [query, setQuery] = React.useState('');
  
  const getShippingList = async (query) => {
    const response = await get(`/finance/shippingComps?search=${query}`);
    return response;
  };

  const { data, isLoading } = useQuery(['search', query], () => getShippingList(query));

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar active="shipping-comps" />

      <div className="flex-grow p-8 bg-gray-300 pt-20">
        <ShippingComps 
          shippingList={data}
          loading={isLoading}
          query={query}
          setQuery={setQuery}
        />
      </div>
    </div>
  );
}
