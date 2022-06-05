import styled from "styled-components";
import media from "~/components/UIElements/media";

export const HeaderContainer = styled.div`
  #components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: url(https://cdn.shopify.com/s/files/1/0054/6665/2718/files/bvo-updated-logo-2.png?v=1624107079);
  }
  .ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
  .ant-layout-header {
      background-color: #F6FAFD;
      display: flex;
      justify-content: space-between
  }

  .ant-menu {
    background : transparent;
  }

  .ant-menu-horizontal {
    border-bottom : none;
  }

  .ant-menu-horizontal > .ant-menu-item a{
    color : #38446D;
    font-family: 'Proxima Nova';
    font-style: normal;
  }
  
  
  ${media.mobile`
    .ant-layout-header {
      padding: 0px 24px;
    }
  `}
`

