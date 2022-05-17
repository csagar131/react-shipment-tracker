const orderStatusMapping = {
  OP: 'Waiting for Pickup',
  OM: 'Waiting for Pickup',
  OC: 'Order Cancelled',
  PP: 'Order Picked Up',
  OD: 'Order Dispatched',
  OT: 'Order in Transit',
  OO: 'Order Out for Delivery',
  NDR: 'Failed Attempt at Delivery',
  DL: 'Order Delivered',
  RTO: 'Order Returned Back',
  'RTO-OT': 'RTO in Transit',
  'RTO-OO': 'RTO out for delivery',
  RTP: 'RTO Reached Pickrr Warehouse',
  RTD: 'Order Returned to Seller',
  OFP: 'Out for Pickup',
  PPF: 'Pickup Failed',
};

export default orderStatusMapping;
