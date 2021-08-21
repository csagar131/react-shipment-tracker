import styled from 'styled-components';
import media from '../../components/UIElements/media';

import { Row, Input, Card, Button } from 'antd';
const { Search } = Input;

export const TrackRow = styled(Row)`
  background-image: url('https://res.cloudinary.com/drlluzgke/image/upload/v1610719778/Pickrr/tracking-bg2_zjqium.svg');
  height: 65vh;
  min-width: 100%;
  padding: 130px 0px;
  ${media.mobile`
  height: 600px;
  padding: 130px 0px;

`}
  ${media.tablet`
  height: 600px;
  padding: 130px 0px;

`}
  ${media.ipadPro`
  height: 600px;
  padding: 130px 0px;

`}
`;
export const PrimaryText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 62px;
  line-height: 110%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 0;
  ${media.mobile`
  font-size: 32px;
letter-spacing: -0.035em;
  `}
`;
export const SmallText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  color: #ffffff;
  opacity: 0.6;
  margin-bottom: 0;
  ${media.mobile`
  font-size: 14px;
line-height: 150%;
letter-spacing: 0.01em;
  `}
`;
export const TrackOrderBar = styled(Search)`
  .ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
    background: #ff756c !important;
    border-radius: 12px;
    color: red;
  }
`;
export const TrackingCard = styled(Card)`
  background: #ffffff;
  border-radius: 12px;
  height: 236px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TrackingButton = styled(Button)`
  background: #ff756c;
  border-radius: 4px;
  height: 46px;
  width: 100%;
  border: 0;
  color: white;
  margin-bottom: 30px;
`;
