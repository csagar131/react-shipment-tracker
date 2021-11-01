import React, { useEffect, useContext } from 'react';
import { Col, Input, message } from 'antd';
import Helmet from 'react-helmet';
import { useHistory } from 'react-router-dom';

import {
  TrackRow,
  PrimaryText,
  SmallText,
  TrackOrderBar,
  TrackingCard,
  TrackingButton,
} from './style';
import {
  SpaceBetweenContainerDesktop,
  CommonText,
} from '../../components/UIElements';
import { DataContext } from '../../context/dataProvider';

const HomePage = () => {
  const history = useHistory();
  const { input, setInput, brandDataState } = useContext(DataContext);

  const handleTrack = () => {
    if (!input) {
      message.info('Please enter Tracking ID');
    } else {
      history.push(`${history.location.pathname}?tracking_id=${input}`);
    }
  };

  const handleEnterKey = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.target.blur();
      handleTrack();
    }
  };

  const {brandData: { company_name ='', other: { fav_icon ='', other_details: { primary_color } ={}} ={}} ={}} = brandDataState;

  return (
    <>
    <Helmet preserved>
    <title>{company_name}</title>
    <meta name={company_name} />
    {/* <link rel="icon" type="image/png" href={fav_icon} size="16x16" /> */}
    <link rel="icon" type="image/png" sizes="16x16" href={fav_icon} />
    </Helmet>
    <div
      style={{
        minWidth: '100%',
        minHeight: '100vh',
      }}
    >
      <TrackRow gutter={[0, 32]}>
        <Col span={24}>
          <PrimaryText>Track Your Order</PrimaryText>
        </Col>
        <Col
          lg={{ span: 12, offset: 6 }}
          xl={{ span: 12, offset: 6 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <SmallText>
            Enter your order ID to track the delivery status of your shipment.
            You can find it in the email and SMS alerts you received from us
            upon order confirmation.
          </SmallText>
        </Col>
        <Col
          lg={{ span: 12, offset: 6 }}
          xl={{ span: 12, offset: 6 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        >
          <TrackOrderBar
            placeholder="Enter Tracking ID (Comma separated if multiple)"
            allowClear
            enterButton="Track"
            size="large"
            buttonColor={primary_color}
            onSearch={handleTrack}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="search-bar"
          />
        </Col>
        <Col
          lg={{ span: 0 }}
          xl={{ span: 0 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <Input
            placeholder="Enter Tracking ID (Comma separated if multiple)"
            style={{ borderRadius: '4px', height: '46px' }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleEnterKey}
          />
          <TrackingButton onClick={handleTrack}>Track</TrackingButton>
        </Col>
        <Col
          lg={{ span: 16, offset: 4 }}
          xl={{ span: 16, offset: 4 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <TrackingCard>
            <SpaceBetweenContainerDesktop style={{ textAlign: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="https://res.cloudinary.com/drlluzgke/image/upload/v1610719783/Pickrr/location_pin_qsmyen.svg"
                  alt="location pin"
                  height={100}
                  width={100}
                />
              </div>

              <CommonText style={{ margin: '30px' }}>
                Enter Tracking ID in the search box above to view order details
              </CommonText>
            </SpaceBetweenContainerDesktop>
          </TrackingCard>
        </Col>
      </TrackRow>
    </div>
    </>
  );
};
export default HomePage;
