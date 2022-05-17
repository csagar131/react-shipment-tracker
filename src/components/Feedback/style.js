import styled from 'styled-components';
import media from '../UIElements/media';
import { Form } from 'antd';

export const RateWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
  grid-gap: 1em;
  ${media.mobile`
  grid-template-columns: repeat(auto-fit, minmax(20px, 3fr));
  grid-gap: 3em;
  `}
  ${media.tablet`
  grid-template-columns: repeat(auto-fit, minmax(20px, 2fr));
  grid-gap: 2.5em;
  `}
  ${media.ipadPro`
  grid-template-columns: repeat(auto-fit, minmax(20px, 2fr));
  grid-gap: 2.5em;
  `}
`;

export const RateBox = styled.div`
  border-radius: 7px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  border: ${(props) => (props.active ? 'solid 1px #3b88fa' : '0px')};
`;
export const RateValue = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: 0;
`;

export const FeedbackForm = styled(Form)`
  .ant-form-item-label > label {
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    color: black;
  }
`;
