import styled from "styled-components";
import { Input, Button } from "antd";
import media from "../UIElements/media";

const { Search } = Input;

export const TrackOrderText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: -0.02em;
  color: ${(props) => (props.color ? props.color : "black")};
  margin-bottom: 0;
  ${media.mobile`
  font-size: 32px;
letter-spacing: -0.035em;
text-align:center;
  `}
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  margin-left: 28px;
  .ant-radio span {
    color: #000000;
  }
  .ant-radio-inner::after {
    background-color: ${(props) =>
      props.buttonColor ? `${props.buttonColor}` : "black"}!important;
    /* border-color: ${(props) =>
      props.buttonColor ? `${props.buttonColor}` : "black"}!important; */
  }
  .ant-radio-checked::after {
    /* background-color: ${(props) =>
      props.buttonColor ? `${props.buttonColor}` : "black"}!important; */
    border-color: ${(props) =>
      props.buttonColor ? `${props.buttonColor}` : "black"}!important;
  }
  .ant-radio-checked .ant-radio-inner {
    /* background-color: ${(props) =>
      props.buttonColor ? `${props.buttonColor}` : "black"}!important; */
    border-color: ${(props) =>
      props.buttonColor ? `${props.buttonColor}` : "black"}!important;
  }
`;
export const TrackCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  margin-top: 16px;
`;

export const CompanyName = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 140%;
  color: black;
  ${media.mobile`
  font-size: 18px;
  white-space: nowrap;
  `}
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: black;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  color: black;
  ${media.mobile`
  font-size: 12px;
  line-height: 100%;
  `}
`;
export const TrackOrderBar = styled(Search)`
  .ant-btn-primary {
    background-color: ${(props) =>
      props.buttonColor ? `${props.buttonColor}` : "black"}!important;
    border-color: ${(props) =>
      props.buttonColor ? `${props.buttonColor}` : "black"}!important;
    width: 282px;
    border-radius: 12px !important;
  }

  .ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
    background: #ff756c !important;
    border-radius: 12px;
    color: red;
  }
  .ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
    border: none !important;
  }

  /* width: 50%; */
  ${media.mobile`
  width: 100%;
  `}
  ${media.tablet`
  width: 100%;
  `}
`;
export const TrackingButton = styled(Button)`
  background: ${(props) =>
    props.buttonColor ? `${props.buttonColor}` : "black"}!important;
  border-radius: 4px;
  height: 46px;
  width: 100%;
  border: 0;
  color: white;
  margin-bottom: 30px;
  .ant-btn-primary {
    background-color: ${(props) =>
      props.buttonColor ? `${props.buttonColor}` : "black"}!important;
  }
`;
export const FlexColContainerCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? "center" : "initial")};
  justify-content: ${(props) => (props.center ? "center" : "initial")};
  margin: 0px 10px;
  width: 100%;
  ${media.mobile`
  display: flex;
  justify-content: space-around;
  text-align:left;
 flex-direction:row;
`}
`;
export const CompanyLogo = styled.img`
  height: 44px;
  margin-right: 20px;
  ${media.mobile`
height:32px;
`};
`;
