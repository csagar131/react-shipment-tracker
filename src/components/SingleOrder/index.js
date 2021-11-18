import React, { useContext } from 'react';
import { Row, Col, Card, Divider, Tooltip } from 'antd';
import { WhatsappIcon, WhatsappShareButton } from 'react-share';
import TrackedOrder from '../TrackedOrder';
import Feedback from '../Feedback';
import {
  CompanyName,
  Title,
  Text,
  FlexColContainerCustom,
  CompanyLogo,
  CompanyContainer,
} from './style';
import {
  FlexBox,
  SpaceBetweenContainerDesktop,
  FlexEndContainer,
} from '../UIElements';
import { DataContext } from '../../context/dataProvider';

const SingleOrder = ({ data }) => {
  const { brandDataState } = useContext(DataContext);

  const { brandData: { logo = '', company_name = '' } = {} } = brandDataState;

  return (
    <Card
      style={{
        borderRadius: '12px',
      }}
    >
      <SpaceBetweenContainerDesktop>
        <FlexBox style={{ alignItems: 'center' }}>
          <CompanyContainer>
            <CompanyLogo src={logo} alt="logo" />
          </CompanyContainer>

          <CompanyName style={{ marginBottom: '0px' }}>
            {company_name === 'bellavita' ? '' : company_name}
          </CompanyName>
        </FlexBox>

        <FlexEndContainer>
          {data?.courier_used && (
            <FlexColContainerCustom>
              <Title>Courier</Title>
              <Text>{data && data?.courier_parent_name}</Text>
            </FlexColContainerCustom>
          )}
          {data?.client_order_id && (
            <FlexColContainerCustom>
              <Title>Order ID</Title>
              <Text>{data && data?.client_order_id}</Text>
            </FlexColContainerCustom>
          )}
          {data?.courier_tracking_id && (
            <FlexColContainerCustom>
              <Title>Tracking ID</Title>

              <Text>{data && data?.courier_tracking_id}</Text>
            </FlexColContainerCustom>
          )}
          {data && data?.show_details && data?.web_address && (
            <FlexColContainerCustom>
              <Title>Website</Title>
              <Text>{data && data?.web_address}</Text>
            </FlexColContainerCustom>
          )}
          {data && (
            <FlexColContainerCustom alignSelf={'flex-end'}>
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
        </FlexEndContainer>
      </SpaceBetweenContainerDesktop>
      <Divider />
      <Row gutter={[32, 16]} style={{ background: '#fcfcfc' }}>
        <Col
          lg={{ span: 12 }}
          style={{
            background: '#fcfcfc',
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
    </Card>
  );
};
export default SingleOrder;
