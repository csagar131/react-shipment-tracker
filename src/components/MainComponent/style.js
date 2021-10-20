import styled, {createGlobalStyle} from 'styled-components';
import media from '../../components/UIElements/media';

export const ImageContainer = styled.div`
  background: url('https://res.cloudinary.com/drp9wl6fg/image/upload/v1631359172/bellavita%20resource/Soap-Banner_qlwj9j.png') center center / cover no-repeat;
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
export const HeaderContainer = styled.div`
  /* Style the header with a grey background and some padding */
  text-align: center;

  .header {
    overflow: hidden;
    background-color: #fff;
    padding: 20px 10px;
    text-transform: uppercase;
    font-weight: 600;
  }

  /* Style the header links */
  .header a {
    float: none;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 12px;
    line-height: 25px;
    border-radius: 4px;
  }

  /* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
  .header a.logo {
    font-size: 25px;
    font-weight: bold;
  }

  /* Change the background color on mouse-over */
  .header a:hover {
    background-color: #ddd;
    color: black;
  }

  /* Float the link section to the right */
  .header-right {
    float: right;
    ${media.mobile`
 display: none;
  `};
  }

  /* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
  @media screen and (max-width: 500px) {
    .header a {
      float: none;
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }

  .button {
    float: left;
    width: 60px;
    height: 60px;
    cursor: pointer;
    background: #fff;
    overflow: hidden;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  }

  .button span {
    font-size: 20px;
    font-weight: 500;
    line-height: 60px;
    margin-left: 10px;
  }

  .button:hover {
    width: 200px;
  }

  .button:nth-child(1):hover .icon {
    background: #e1306c;
  }

  .button:nth-child(2):hover .icon {
    background: #4267b2;
  }

  .button:nth-child(3):hover .icon {
    background: #1da1f2;
  }

  .button:nth-child(4):hover .icon {
    background: #0e76a8;
  }

  .button:nth-child(5):hover .icon {
    background: #ff0000;
  }

  .button:nth-child(6):hover .icon {
    background: #333;
  }

  .button:nth-child(1) span {
    color: #e1306c;
  }

  .button:nth-child(2) span {
    color: #4267b2;
  }

  .button:nth-child(3) span {
    color: #1da1f2;
  }

  .button:nth-child(4) span {
    color: #0e76a8;
  }

  .button:nth-child(5) span {
    color: #ff0000;
  }

  .button:nth-child(6) span {
    color: #333;
  }

  .button .icon {
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius: 50px;
    display: inline-block;
    transition: all 0.3s ease-in-out;
  }

  .button .icon i {
    font-size: 25px;
    line-height: 60px;
    transition: all 0.3s ease-in-out;
  }

  .button:hover i {
    color: #fff;
  }
`;

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: ${(props) => props.fontFamily};
      src: ${(props) => `URL(${props.fontTypeUrl}) format('truetype')`} ;
    }
    body {
      font-family: ${(props) => props.fontFamily}, serif;
    }
`;
