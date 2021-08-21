import React from 'react';
import moment from 'moment';
import {
  UserOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';

import {
  SpaceBetweenContainer,
  CommonText,
  FlexColContainer,
  CommonSubText,
} from '../../UIElements';
import {
  TypeOfPaymentCard,
  TypeOfPayment,
  CustomImg,
  LocationCard,
  CardX,
} from './style';
import orderStatusMapping from '../../../orderStatusMapping';

const OrderStatus = ({ data }) => {
  const getImageUrl = (status) => {
    if (status === 'DL')
      return 'https://res.cloudinary.com/drlluzgke/image/upload/v1610719781/Pickrr/delivered-check_o5egtd.svg';
    if (status === 'OP' || 'OM')
      return 'https://res.cloudinary.com/drlluzgke/image/upload/v1612071660/Pickrr/waiting_wcjh0v.svg';
    if (status === 'OC' || status.includes('RT'))
      return 'https://res.cloudinary.com/drlluzgke/image/upload/v1612072991/Pickrr/returned_sjo4c1.svg';
    if (status === 'OT')
      return 'https://res.cloudinary.com/drlluzgke/image/upload/v1612073095/Pickrr/in-transit_q4dpyi.svg';
  };
  return (
    <>
      <CardX
        style={{
          borderRadius: '12px',
          border: 0,
          marginBottom: '10px',
        }}
        type={data.status.current_status_type}
      >
        <SpaceBetweenContainer>
          <CustomImg src={getImageUrl(data.status.current_status_type)} />
          <FlexColContainer>
            <CommonText color={'white'}>
              {data && orderStatusMapping[data.status.current_status_type]}
            </CommonText>
            <CommonSubText color={'white'} style={{ marginBottom: '0px' }}>
              Last updated on{' '}
              {data &&
                moment(new Date(data.status.current_status_time)).format(
                  'MMMM Do YYYY, h:mm a'
                )}
            </CommonSubText>
            <CommonSubText color={'white'} style={{ marginBottom: '0px' }}>
              {data.status.received_by && (
                <span>
                  <UserOutlined /> Received By - {data.status.received_by}
                </span>
              )}
            </CommonSubText>
            <CommonSubText color={'white'} style={{ marginBottom: '0px' }}>
              {data.edd_stamp && (
                <span>
                  <ClockCircleOutlined /> Expected Delivery Date -{' '}
                  {moment(new Date(data.edd_stamp)).format('MMMM Do YYYY')}
                </span>
              )}
            </CommonSubText>
          </FlexColContainer>
          <TypeOfPaymentCard style={{ alignSelf: 'flex-end' }}>
            <TypeOfPayment type={data.status.current_status_type}>
              {data.info.cod_amount
                ? `COD - ₹${data.info.cod_amount}`
                : 'PREPAID'}
            </TypeOfPayment>
          </TypeOfPaymentCard>
        </SpaceBetweenContainer>
      </CardX>
      <LocationCard style={{ background: '#dddd', borderRadius: '12px' }}>
        <SpaceBetweenContainer>
          <FlexColContainer>
            <CommonText
              style={{
                marginBottom: '0',
                textTransform: 'uppercase',
                wordBreak: 'break-all',
              }}
              size={2}
            >
              {data.info.from_city}
            </CommonText>
            <CommonSubText
              style={{ opacity: 0.6, marginBottom: '0', textAlign: 'center' }}
            >
              {data.info.from_pincode}
            </CommonSubText>
          </FlexColContainer>

          {/* <img
            src="https://res.cloudinary.com/drlluzgke/image/upload/v1610719783/Pickrr/arrow-right_thcjcd.svg"
            alt="arrow"
          /> */}
          <ArrowRightOutlined style={{ fontSize: '24px' }} />

          <FlexColContainer>
            <CommonText
              style={{
                marginBottom: '0',
                textTransform: 'uppercase',
                wordBreak: 'break-all',
              }}
              size={2}
            >
              {data.info.to_city}
            </CommonText>
            <CommonSubText
              style={{ opacity: 0.6, marginBottom: '0', textAlign: 'center' }}
            >
              {data.info.to_pincode}
            </CommonSubText>
          </FlexColContainer>
        </SpaceBetweenContainer>
      </LocationCard>
    </>
  );
};
export default OrderStatus;
