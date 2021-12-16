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
  FlexBox,
} from '../../UIElements';
import {
  TypeOfPaymentCard,
  TypeOfPayment,
  CustomImg,
  LocationCard,
  CardX,
  FlexBetween,
  FlexCol,
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
        type={data?.status?.current_status_type}
      >
        <FlexBetween>
          <FlexBox style={{ justifyContent: 'row', alignItems: 'flex-start' }}>
            <CustomImg src={getImageUrl(data?.status?.current_status_type)} />
            <FlexColContainer style={{ wordBreak: 'break-word' }}>
              <CommonText color={'white'}>
                {data && orderStatusMapping[data?.status?.current_status_type]}
              </CommonText>
              <CommonSubText color={'white'} style={{ marginBottom: '0px' }}>
                Last updated on{' '}
                {data &&
                  moment(new Date(data?.status?.current_status_time)).format(
                    'MMMM Do YYYY, h:mm a'
                  )}
              </CommonSubText>
              <CommonSubText color={'white'} style={{ marginBottom: '0px' }}>
                {data?.status?.received_by && (
                  <span>
                    <UserOutlined /> Received By - {data?.status?.received_by}
                  </span>
                )}
              </CommonSubText>
              {data?.status?.current_status_type !== 'OC' &&
                data?.status?.current_status_type !== 'RTO' &&
                data?.status?.current_status_type !== 'RTD' &&
                data?.status?.current_status_type !== 'DL' && (
                  <CommonSubText
                    color={'white'}
                    style={{ marginBottom: '0px' }}
                  >
                    {data?.edd_stamp && (
                      <span>
                        <ClockCircleOutlined /> Expected Delivery Date -{' '}
                        {moment(new Date(data?.edd_stamp)).format(
                          'MMMM Do YYYY'
                        )}
                      </span>
                    )}
                  </CommonSubText>
                )}
            </FlexColContainer>
          </FlexBox>
          <TypeOfPaymentCard style={{ alignSelf: 'flex-end' }}>
            <TypeOfPayment type={data?.status?.current_status_type}>
              {data?.info?.cod_amount ? (
                <FlexCol
                  style={{ padding: '14px', paddingBottom: 0 }}
                  center={true}
                >
                  <span>COD</span>
                  <span>₹{data.info.cod_amount}</span>
                </FlexCol>
              ) : (
                <FlexColContainer style={{ padding: '14px' }}>
                  PREPAID
                </FlexColContainer>
              )}
            </TypeOfPayment>
          </TypeOfPaymentCard>
        </FlexBetween>
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
              {data?.info?.from_city}
            </CommonText>
            <CommonSubText
              style={{ opacity: 0.6, marginBottom: '0', textAlign: 'center' }}
            >
              {data?.info?.from_pincode}
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
              {data?.info?.to_city}
            </CommonText>
            <CommonSubText
              style={{ opacity: 0.6, marginBottom: '0', textAlign: 'center' }}
            >
              {data?.info?.to_pincode}
            </CommonSubText>
          </FlexColContainer>
        </SpaceBetweenContainer>
      </LocationCard>
    </>
  );
};
export default OrderStatus;
