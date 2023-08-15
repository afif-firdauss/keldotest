import Sidebar from 'components/containers/Sidebar';
import UpdateShippingComps from 'components/containers/UpdateShippingComps';
import React from 'react';
import { useLocation  } from 'react-router-dom';

export default function UpdateShipping() {
  const location = useLocation();
  const name = location.state?.data?.name;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar active="shipping-comps" />

      <div className="flex-grow p-8 bg-gray-300 pt-20">
        <UpdateShippingComps name={name} />
      </div>
    </div>
  );
}
