import styled from "styled-components";
import media from "../UIElements/media";

export const BannerContainer = styled.div`
  background: url(https://res.cloudinary.com/drp9wl6fg/image/upload/v1631359172/bellavita%20resource/Soap-Banner_qlwj9j.png) center center / cover no-repeat;
  background: ${(props) => (props.url ? `url(${props.url}) center center / cover no-repeat` : '#d3d3d3')};
  min-width: 100%;
  padding: 0px 0px;
  height: 397px;
  ${media.mobile`
height: 70vh;
padding: 130px 0px;
background-image:none;
background-color:#FBD401;
`}
  ${media.tablet`
height: 70vh;
padding: 130px 0px;
background-image:none;
background-color:#FBD401;


`}
${media.ipadPro`
height: 70vh;
padding: 130px 0px;
background-image:none;
background-color:#FBD401;

`}
`;