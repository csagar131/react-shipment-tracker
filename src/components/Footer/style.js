import styled from "styled-components";
import media from "../UIElements/media";

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: flex-end; 
    ${media.mobile`
        justify-content: flex-start
    `}
`;

export const FollowUsText = styled.p`
    text-align: right;
    ${media.mobile`
        padding-top: 20px;
        text-align: left;
    `}
`;

export const PoweredByText = styled.p`
    text-align: center;
    ${media.mobile`
        text-align: left;
    `}
`

export const LogoContainer = styled.div`
    text-align: center;
    ${media.mobile`
        text-align: left;
    `}
`