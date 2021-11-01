import styled from "styled-components";
import media from "../UIElements/media";

export const ProductDetailContainer = styled.div`
    padding: 42px 120px;
    .ant-card-meta-description {
        height: 66px
    }
    min-height: ${(props) => (props.height ? '70vh' : '0px' )};
    ${media.mobile`
        padding: 42px 32px;
    `}
    ${media.tablet`
        padding: 42px 40px;
    `}
    ${media.desktop`
        padding: 42px 40px;
    `}
`;