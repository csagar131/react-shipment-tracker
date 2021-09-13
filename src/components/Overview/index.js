import React, { useContext } from 'react';
import { Row, Col, Input, message, Spin, Alert } from 'antd';
import { useHistory } from 'react-router-dom';

import { TrackOrderText, TrackOrderBar, TrackingButton } from './style';
import {
  SpaceBetweenContainer,
  SpaceBetweenContainerDesktop,
} from '../UIElements';
import SingleOrder from '../SingleOrder';
import MulipleOrders from '../MultipleOrders';
import { DataContext } from '../../context/dataProvider';
import ProductDetails from '../ProductDetails';
import Footer from '../Footer';

const Overview = ({brandData}) => {
  const history = useHistory();

  const { isMultiple, input, setInput, state, setTrackingId } =
    useContext(DataContext);
  const { loading, data, err } = state;

  const handleTrack = async () => {
    if (!input) {
      message.info('Please enter Tracking ID');
    } else {
      history.push(`${history.location.pathname}?tracking_id=${input}`);
      let query = decodeURI(history.location.search.split('=')[1]);

      if (query !== 'undefined') {
        setTrackingId(query);
      }
    }
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col
          lg={{ span: 18, offset: 3 }}
          xl={{ span: 18, offset: 3 }}
          md={{ span: 22, offset: 1 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        >
          <SpaceBetweenContainer style={{ marginTop: '12px' }}>
            <TrackOrderText>Track Your Order</TrackOrderText>
            <TrackOrderBar
              placeholder="Enter Tracking ID (Comma separated if multiple)"
              allowClear
              enterButton="Track"
              size="large"
              onSearch={handleTrack}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="search-bar"
              onPressEnter={handleTrack}
            />
          </SpaceBetweenContainer>
        </Col>
        <Col
          lg={{ span: 0 }}
          xl={{ span: 0 }}
          md={{ span: 0 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <SpaceBetweenContainerDesktop>
            <TrackOrderText>Track Your Order</TrackOrderText>
            <Input
              placeholder="Enter Tracking ID (Comma separated if multiple)"
              style={{ borderRadius: '4px', height: '46px', marginTop: '25px' }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onPressEnter={handleTrack}
            />
            <TrackingButton onClick={handleTrack}>Track</TrackingButton>
          </SpaceBetweenContainerDesktop>
        </Col>
        {loading ? (
          <Col span={24}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '250px',
              }}
            >
              <Spin size="large" />
            </div>
          </Col>
        ) : data ? (
          <Col
            lg={{ span: 18, offset: 3 }}
            xl={{ span: 18, offset: 3 }}
            sm={{ span: 22, offset: 1 }}
            xs={{ span: 22, offset: 1 }}
          >
            {isMultiple ? (
              data &&
              data.response_list &&
              data.response_list.map((d, index) => {
                return <MulipleOrders key={index} data={d} />;
              })
            ) : (
              <SingleOrder data={data} />
            )}
          </Col>
        ) : err ? (
          <Col
            lg={{ span: 18, offset: 3 }}
            xl={{ span: 18, offset: 3 }}
            sm={{ span: 22, offset: 1 }}
            xs={{ span: 22, offset: 1 }}
          >
            <Alert
              message={err && err.err}
              type="error"
              style={{ marginTop: '30px' }}
            />
          </Col>
        ) : null}
      </Row>
      <ProductDetails brandData={brandData} />  
      <Footer brandData={brandData} />  
    </>
  );
};

export default Overview;
