import React from 'react';
import OrderStatus from './OrderStatus';
import OrderTracker from './OrderTracker';

export const TrackedOrder = ({ data }) => {
  return (
    <>
      <OrderStatus data={data} />
      <OrderTracker data={data} />
    </>
  );
};
export default TrackedOrder;
