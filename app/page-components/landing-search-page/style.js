import styled from "styled-components";
import { Button } from "antd";
import media from "~/components/UIElements/media";
export const Footer = styled.img`
  width: 100%;
  bottom: 0;
`;

export const MainContainer = styled.div`
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
  padding: 70px 0;

  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    letter-spacing: 0.01em;
    color: #38446d;
  }
  .subtitle {
    margin-top: 39px;
  }
  .support-text {
    font-weight: 400;
    font-size: 14px;
    color: #38446d;
    margin-bottom: 15px;
  }
  .input-button-container {
    display: flex; 
  }
  .powered {
    text-align: center;
    margin-top: 85px;
    text-decoration-line: underline;
    color: #38446d;
  }

  ${media.mobile`
      padding : 70px 16px;

      .title {
        font-size : 20px;
      }

      .subtitle {
        margin-top: 12px;
        font-size : 18px;
      }
      .input-button-container {
        display: flex; 
        flex-wrap : wrap;
      }

      .track-order-button-link{
        width : 100%;
        margin-top : 12px;
      }
  `}
`;

export const LandingSearchPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
export const CustomButton = styled(Button)`
  width: 216px !important;
  height: 49px !important;
  background: linear-gradient(
    105.06deg,
    #ff4c4a -5.19%,
    #ff756c 32.99%,
    #f16242 57.37%,
    #da4040 97.18%,
    #ce2500 116.5%,
    #9a0200 150.8%
  ) !important;
  border-radius: 10px !important;

  ${media.mobile`
    width : 100% !important;
  `}
`;


export const ProductDetailContainer = styled.span`
    margin-top: 12px;
    text-align: center;
    overflow : hidden;
    display: -webkit-box;
    text-overflow : ellipsis;
    font-weight : 400;
    font-size : 14px;
    word-break: break-word;
    line-height: 16px; 
    max-height: 32px; 
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
`