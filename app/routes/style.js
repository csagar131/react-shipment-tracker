import styled from "styled-components";
import media from "~/components/UIElements/media";
export const Container = styled.div`
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
`;
export const MainContainer = styled.div`
  background: #edf0f9;
  border-radius : 10px;
  width: 100%;
  padding: 28px 24px;
  margin : 8px 0;
  .input-button-containe {
    display: flex;
  }
  .order-info-container {
    margin-top: 30px;
  }

  ${media.mobile`
    padding: 18px 8px;
  `}
`;

export const Title = styled.p`
  font-style: normal;
  font-size: 30px;
  line-height: 37px;
  color: #38446d;
  ${media.mobile`
  font-size: 18px;

`};
`;
