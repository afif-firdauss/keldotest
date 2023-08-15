import AddShippingComps from 'components/containers/AddShippingComps';
import Sidebar from 'components/containers/Sidebar';
import React from 'react';

export default function AddShipping() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar active="shipping-comps" />

      <div className="flex-grow p-8 bg-gray-300 pt-20">
        <AddShippingComps />
      </div>
    </div>
  );
}
