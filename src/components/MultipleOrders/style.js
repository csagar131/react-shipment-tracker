import styled from 'styled-components';
import { Input, Button } from 'antd';
import media from '../UIElements/media';

const { Search } = Input;

export const TrackOrderText = styled.p`
  font-weight: bold;
  font-size: 46px;
  line-height: 110%;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 0;
  ${media.mobile`
  font-size: 32px;
letter-spacing: -0.035em;
  `}
`;

export const CompanyName = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 140%;
  color: #263f97;
  ${media.mobile`
  font-size: 18px;
  white-space: nowrap
  `}
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: rgba(38, 63, 151, 0.6);
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  color: #263f97;
  ${media.mobile`
  font-size: 12px;
  line-height: 100%;
  `}
`;
export const TrackOrderBar = styled(Search)`
  .ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
    background: #ff756c !important;
    border-radius: 12px;
    color: red;
  }
  width: 50%;
  ${media.mobile`
  width: 100%;
  `}
  ${media.tablet`
  width: 100%;
  `}
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
export const FlexColContainerCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? 'center' : 'initial')};
  justify-content: ${(props) => (props.center ? 'center' : 'initial')};
  margin: 0px 10px;
  ${media.mobile`
justify-content: space-between;
text-align:center;
flex-direction:row;
`}
`;
export const CompanyLogo = styled.img`
  width: 100%;

  margin-right: 20px;
`;
export const CompanyContainer = styled.div`
  width: 100px;
  margin-right: 12px;
`;

export const ViewDetailsButton = styled(Button)`
  background: #d5e8f3;
  border-radius: 12px;
  border: 0;
  font-weight: bold;
  font-size: 12px;
  line-height: 24px;
  color: #263f97;
  width: 100%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  &:hover {
    background: #bddbed;
    color: #263f97;
  }
`;
