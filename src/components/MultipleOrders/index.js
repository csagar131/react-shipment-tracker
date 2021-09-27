import React, { useState } from 'react';
import { Row, Col, Card, Space, Tooltip } from 'antd';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';
import {
  DownOutlined,
  UpOutlined,
  UserOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import TrackedOrder from '../TrackedOrder';
import Feedback from '../Feedback';
import moment from 'moment';
import {
  CompanyName,
  Title,
  Text,
  FlexColContainerCustom,
  CompanyLogo,
  ViewDetailsButton,
  CompanyContainer,
} from './style';
import {
  FlexBox,
  SpaceBetweenContainerDesktop,
  FlexColContainer,
  CommonText,
  CommonSubText,
  SpaceBetweenContainer,
} from '../UIElements';
import orderStatusMapping from '../../orderStatusMapping';
import {
  TypeOfPaymentCard,
  TypeOfPayment,
  CustomImg,
  CardX,
} from '../TrackedOrder/OrderStatus/style';

const MulipleOrders = ({ data, logo }) => {
  const [showButton, setShowButton] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  const showDetailFunc = () => {
    if (showDetails) {
      setShowButton(true);
      setShowDetails(false);
    } else {
      setShowButton(false);
      setShowDetails(true);
    }
  };

  return (
    <>
      {data.err ? (
        <Card
          style={{
            borderRadius: '12px',
            marginBottom: '30px',
            paddingBottom: '5px !important',
          }}
        >
          <SpaceBetweenContainerDesktop>
            <FlexColContainerCustom>
              <Title>Tracking ID</Title>
              <Text>{data && data.tracking_id}</Text>
            </FlexColContainerCustom>
            <FlexColContainerCustom>
              <Title>Error</Title>
              <Text style={{ color: '#EB5950' }}>{data && data.err}</Text>
            </FlexColContainerCustom>
          </SpaceBetweenContainerDesktop>
        </Card>
      ) : (
        <Card
          style={{
            borderRadius: '12px',
            marginBottom: '30px',
            paddingBottom: '5px !important',
          }}
        >
          <SpaceBetweenContainerDesktop>
            <>
              <FlexBox style={{ alignItems: 'center' }}>
                <CompanyContainer>
                  <CompanyLogo
                    src={logo}
                    alt="logo"
                  />
                </CompanyContainer>
              </FlexBox>
            </>

            <SpaceBetweenContainerDesktop>
              {data?.courier_used && (
                <FlexColContainerCustom>
                  <Title>Courier</Title>
                  <Text>{data && data.courier_used}</Text>
                </FlexColContainerCustom>
              )}

              {data?.client_order_id && (
                <FlexColContainerCustom>
                  <Title>Order ID</Title>
                  <Text>{data && data.client_order_id}</Text>
                </FlexColContainerCustom>
              )}
              {data?.courier_tracking_id && (
                <FlexColContainerCustom>
                  <Title>Tracking ID</Title>
                  <Text>{data && data.courier_tracking_id}</Text>
                </FlexColContainerCustom>
              )}
              {data?.show_details && data?.web_address && (
                <FlexColContainerCustom>
                  <Title>Website</Title>
                  <Text>{data && data.web_address}</Text>
                </FlexColContainerCustom>
              )}
              {data && (
                <FlexColContainerCustom alignSelf={"flex-end"}>
                  <Tooltip title="Share">
                    <WhatsappShareButton
                      url={window.location.href}
                      title="Bellavita Tracking"
                    >
                      <WhatsappIcon size={36} />
                    </WhatsappShareButton>
                  </Tooltip>
                </FlexColContainerCustom>
              )}
            </SpaceBetweenContainerDesktop>
          </SpaceBetweenContainerDesktop>

          {!showDetails && (
            <Row>
              <Col span={24}>
                <CardX
                  style={{
                    borderRadius: '12px',
                    border: 0,
                    marginBottom: '10px',
                  }}
                  type={data?.status?.current_status_type}
                >
                  <SpaceBetweenContainer>
                    <Space>
                      <CustomImg
                        src="https://res.cloudinary.com/drlluzgke/image/upload/v1610719781/Pickrr/delivered-check_o5egtd.svg"
                        alt="check"
                      />
                      <FlexColContainer>
                        <CommonText color={'white'}>
                          {data &&
                            orderStatusMapping[data?.status?.current_status_type]}
                        </CommonText>
                        <CommonSubText
                          color={'white'}
                          style={{ marginBottom: '0px' }}
                        >
                          Last updated on{' '}
                          {data &&
                            moment(
                              new Date(data?.status?.current_status_time)
                            ).format('MMMM Do YYYY, h:mm a')}
                        </CommonSubText>
                        <CommonSubText
                          color={'white'}
                          style={{ marginBottom: '0px' }}
                        >
                          {data?.status?.received_by && (
                            <span>
                              <UserOutlined /> Received By -{' '}
                              {data?.status?.received_by}
                            </span>
                          )}
                        </CommonSubText>
                        <CommonSubText
                          color={'white'}
                          style={{ marginBottom: '0px' }}
                        >
                          {data?.edd_stamp && (
                            <span>
                              <ClockCircleOutlined /> Expected Delivery Date -{' '}
                              {moment(new Date(data.edd_stamp)).format(
                                'MMMM Do YYYY'
                              )}
                            </span>
                          )}
                        </CommonSubText>
                      </FlexColContainer>
                    </Space>
                    <TypeOfPaymentCard style={{ alignSelf: 'flex-end' }}>
                      <TypeOfPayment type={data?.status?.current_status_type}>
                        {data?.info?.cod_amount
                          ? `COD - ₹${data?.info?.cod_amount}`
                          : 'PREPAID'}
                      </TypeOfPayment>
                    </TypeOfPaymentCard>
                  </SpaceBetweenContainer>
                </CardX>
              </Col>
            </Row>
          )}

          {showButton && (
            <ViewDetailsButton onClick={showDetailFunc} icon={<DownOutlined />}>
              View More Details
            </ViewDetailsButton>
          )}
          {showDetails && (
            <>
              <Row gutter={[32, 16]} style={{ background: '#fcfcfc' }}>
                <Col
                  lg={{ span: 12 }}
                  style={{
                    background: '#ffff',
                    maxHeight: '765px',
                    overflow: 'auto',
                  }}
                  md={{ span: 12 }}
                >
                  <TrackedOrder data={data} />
                </Col>
                <Col lg={{ span: 12 }} md={{ span: 12 }}>
                  <Feedback data={data} />
                </Col>
              </Row>
              <ViewDetailsButton onClick={showDetailFunc} icon={<UpOutlined />}>
                View Less Details
              </ViewDetailsButton>
            </>
          )}
        </Card>
      )}
    </>
  );
};
export default MulipleOrders;
