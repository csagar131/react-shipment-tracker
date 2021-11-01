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

const Overview = () => {
  const history = useHistory();
  const { isMultiple, input, setInput, state, setTrackingId, brandDataState  } =
    useContext(DataContext);
  const { loading, data, err } = state;
  const {brandData: {logo ='',company_name ="", other: {other_details: { primary_color, primary_font_color } ={}} ={}} ={}} = brandDataState;
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
      <Row gutter={[16, 16]} style={{marginBottom: 12}}>
        <Col
          lg={{ span: 17, offset: 3 }}
          xl={{ span: 17, offset: 3 }}
          md={{ span: 22, offset: 1 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        >
          <SpaceBetweenContainer style={{ marginTop: '12px' }}>
            <TrackOrderText color={primary_font_color}>Track Your Order</TrackOrderText>
            <TrackOrderBar
              placeholder="Enter Tracking ID (Comma separated if multiple)"
              allowClear
              enterButton="Track"
              size="large"
              onSearch={handleTrack}
              value={input}
              buttonColor={primary_color}
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
            <TrackOrderText color={primary_font_color}>Track Your Order</TrackOrderText>
            <Input
              placeholder="Enter Tracking ID (Comma separated if multiple)"
              style={{ borderRadius: '4px', height: '46px', marginTop: '25px' }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onPressEnter={handleTrack}
            />
            <TrackingButton buttonColor={primary_color} onClick={handleTrack}>Track</TrackingButton>
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
          <Row style={{justifyContent: 'center', width: '100%'}}>
            <Col
              lg={company_name === 'bellavita' ? 15 : 18}
              xl={company_name === 'bellavita' ? 15 : 18}
              md={22}
              sm={22}
              xs={22}
            >
              {isMultiple ? (
                data &&
                data.response_list &&
                data.response_list.map((d, index) => {
                  return <MulipleOrders key={index} data={d} logo={logo} />;
                })
              ) : (
                <SingleOrder data={data} />
              )}
            </Col>
          </Row>
        ) : err ? (
          <Col
            lg={{ span: 18, offset: 3 }}
            xl={{ span: 18, offset: 3 }}
            sm={{ span: 22, offset: 1 }}
            xs={{ span: 22, offset: 1 }}
            style={{minHeight: '58vh'}}
          >
            <Alert
              message={err && err.err}
              type="error"
              style={{ marginTop: '30px' }}
            />
          </Col>
        ) : null}
      </Row>
      <ProductDetails />  
      <Footer />  
    </>
  );
};

export default Overview;
