import React, { useContext } from 'react';
import { Row, Col, Input, message, Spin, Alert, Radio } from 'antd';
import { useHistory } from 'react-router-dom';

import {
  TrackOrderText,
  TrackOrderBar,
  TrackingButton,
  RadioContainer,
  TrackCard,
} from './style';
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
  const {
    isMultiple,
    input,
    setInput,
    state,
    setTrackingId,
    brandDataState,
    searchBy,
    setSearchBy,
  } = useContext(DataContext);
  const { loading, data, err } = state;
  const {
    brandData: {
      logo = '',
      company_name = '',
      other: { other_details: { primary_color, primary_font_color } = {} } = {},
    } = {},
    brandErr = {},
  } = brandDataState;
  // const handleTrack = async () => {
  //   if (!input) {
  //     message.info("Please enter Tracking ID");
  //   } else {
  //     history.push(`${history.location.pathname}?tracking_id=${input}`);
  //     let query = decodeURI(history.location.search.split("=")[1]);

  //     if (query !== "undefined") {
  //       setTrackingId(query);
  //     }
  //   }
  // };

  const handleTrack = () => {
    if (!input) {
      message.info('Please enter Tracking ID');
    } else {
      // if (searchBy === 'client_order_id') {
      //   history.push(
      //     `${history.location.pathname}?${searchBy}=${input}-PICK-137422`
      //   );
      // } else {
      history.push(`${history.location.pathname}?${searchBy}=${input}`);
      // }
    }
  };

  return (
    <>
      <Row style={{ justifyContent: 'center', width: '100%' }}>
        <Col
          lg={company_name === 'bellavita' ? 15 : 18}
          xl={company_name === 'bellavita' ? 15 : 18}
          md={22}
          sm={22}
          xs={22}
        >
          <TrackCard>
            <SpaceBetweenContainer
              style={{
                marginTop: '12px',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  width: '100%',
                  // justifyContent: "space-evenly",
                  borderBottom: '1px solid rgba(0, 0, 0, 0.28)',
                }}
              >
                <TrackOrderText color={primary_font_color}>
                  Track Your Order
                </TrackOrderText>
                {window.location.host === 'shreelifestyle.pickrr.com' && (
                  <RadioContainer>
                    <Radio.Group
                      onChange={(e) => setSearchBy(e.target.value)}
                      value={searchBy}
                    >
                      <Radio
                        value="tracking_id"
                        style={{ color: '#000000', fontWeight: 'bold' }}
                      >
                        Tracking ID
                      </Radio>
                      <Radio
                        value="client_order_id"
                        style={{ color: '#000000', fontWeight: 'bold' }}
                      >
                        Order ID
                      </Radio>
                    </Radio.Group>
                  </RadioContainer>
                )}
              </div>
              <div
                style={{ width: '100%', marginTop: '16px' }}
                className="track"
              >
                <TrackOrderBar
                  placeholder={
                    window.location.host === 'shreelifestyle.pickrr.com'
                      ? 'Enter Tracking ID or Order ID (Comma separated if multiple tracking ids)'
                      : 'Enter Tracking ID (Comma separated if multiple)'
                  }
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
              </div>
            </SpaceBetweenContainer>
          </TrackCard>
        </Col>
        {/* <Col
          lg={{ span: 0 }}
          xl={{ span: 0 }}
          md={{ span: 0 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <SpaceBetweenContainerDesktop>
            <TrackOrderText color={primary_font_color}>
              Track Your Order
            </TrackOrderText>
            <Input
              placeholder="Enter Tracking ID (Comma separated if multiple)"
              style={{ borderRadius: '4px', height: '46px', marginTop: '25px' }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onPressEnter={handleTrack}
            />
            <TrackingButton buttonColor={primary_color} onClick={handleTrack}>
              Track
            </TrackingButton>
          </SpaceBetweenContainerDesktop>
        </Col> */}
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
          <Row
            style={{
              justifyContent: 'center',
              width: '100%',
              marginTop: '26px',
            }}
          >
            <Col
              lg={company_name === 'bellavita' ? 15 : 18}
              xl={company_name === 'bellavita' ? 15 : 18}
              md={22}
              sm={22}
              xs={22}
              style={{ minHeight: '58vh' }}
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
            lg={company_name === 'bellavita' ? 15 : 18}
            xl={company_name === 'bellavita' ? 15 : 18}
            // sm={{ span: 22, offset: 1 }}
            // xs={{ span: 22, offset: 1 }}
            md={22}
            sm={22}
            xs={22}
            style={{ minHeight: '58vh' }}
          >
            {/* {!decodeURI(history.location.search.split('=')[1]) ? ( */}
            <Alert
              message={err && err.err ? err.err : 'Order Id not found'}
              type="error"
              style={{ marginTop: '30px' }}
            />
            {/* // ) : (
            //   <span></span>
            // )} */}
          </Col>
        ) : brandErr ? (
          <Col
            lg={company_name === 'bellavita' ? 15 : 18}
            xl={company_name === 'bellavita' ? 15 : 18}
            sm={22}
            xs={22}
            style={{ minHeight: '58vh' }}
          >
            <Alert
              message={brandErr && brandErr.err}
              type="error"
              style={{ marginTop: '30px' }}
            />
          </Col>
        ) : (
          <Col
            lg={company_name === 'bellavita' ? 15 : 18}
            xl={company_name === 'bellavita' ? 15 : 18}
            sm={22}
            xs={22}
            style={{ minHeight: '58vh' }}
          >
            {/* <Alert
          message={brandErr && brandErr.err}
          type="error"
          style={{ marginTop: '30px' }}
        /> */}
          </Col>
        )}
      </Row>
      <ProductDetails />
      <Footer />
    </>
  );
};

export default Overview;
