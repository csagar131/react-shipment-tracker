import React from 'react';
import { Card } from 'antd';
import {
  Title,
  FlexContainer,
  SpaceBetweenContainer,
  CommonSubText,
  FlexColContainer,
} from '../UIElements';

import { CustomContainer } from './style';

const TrackingTerms = () => {
  const TrackingTerms = [
    {
      image:
        'https://res.cloudinary.com/drlluzgke/image/upload/v1610719781/Pickrr/edd_wu0sri.svg',
      title: 'EDD (Estimated Date of Delivery)',
      text: '  You can expect the order Delivery to your address on this date',
      alt: 'edd',
    },
    {
      image:
        'https://res.cloudinary.com/drlluzgke/image/upload/v1610719781/Pickrr/cm_szet0f.svg',
      title: 'Consignment Manifested',
      text: 'Your order has been accepted by the seller and is ready to be Picked Up by Courier',
      alt: 'cm',
    },
    {
      image:
        'https://res.cloudinary.com/drlluzgke/image/upload/v1610719779/Pickrr/op_zmq4kc.svg',
      title: 'Order Picked',
      text: 'Your Order has been Picked from the Seller Warehouse',
      alt: 'op',
    },
    {
      image:
        'https://res.cloudinary.com/drlluzgke/image/upload/v1610719781/Pickrr/it_ajxc5o.svg',
      title: 'In-Transit',
      text: 'Your order has left the Courier Warehouse and is on its way to the destination location',
      alt: 'it',
    },
    {
      image:
        'https://res.cloudinary.com/drlluzgke/image/upload/v1610719781/Pickrr/ofd_xqcbk4.svg',
      title: 'Out for Delivery',
      text: 'Your order has left the Courier Warehouse in the destination city and is on the way to the destination address',
      alt: 'ofd',
    },
    {
      image:
        'https://res.cloudinary.com/drlluzgke/image/upload/v1610719779/Pickrr/rto_mqb1gb.svg',
      title: 'RTO',
      text: 'Your order could not be delivered, and is in transit back to the seller warehouse',
      alt: 'rto',
    },
  ];

  return (
    <>
      <Card style={{ borderRadius: '12px', marginBottom: '30px' }}>
        <Title style={{ textAlign: 'center', color: 'black' }}>
          What do these shipment tracking terms mean?
        </Title>
        <FlexContainer>
          <SpaceBetweenContainer style={{ flexWrap: 'wrap' }}>
            {TrackingTerms.map((data) => {
              return (
                <CustomContainer key={data.alt}>
                  <img
                    src={data.image}
                    alt={data.alt}
                    style={{ marginRight: '10px' }}
                  />
                  <FlexColContainer>
                    <CommonSubText
                      weight={'bold'}
                      style={{ marginBottom: '0px' }}
                    >
                      {data.title}
                    </CommonSubText>
                    <CommonSubText opacity={2}>{data.text}</CommonSubText>
                  </FlexColContainer>
                </CustomContainer>
              );
            })}
          </SpaceBetweenContainer>
        </FlexContainer>
      </Card>
    </>
  );
};

export default TrackingTerms;
