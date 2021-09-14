import styled from 'styled-components';
import media from '../UIElements/media';

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
      background-color: #fff;
      display: flex;
      justify-content: space-between
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover {
      color: #000;
  }
  .ant-menu-item-active {
      color: #000;
      border-bottom: unset;
  }
  .ant-menu-item:active {
    background: unset;
    color: #000;
    border-bottom: unset;
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after {
      border-bottom: unset!important
  }
  ${media.mobile`
    .ant-layout-header {
      padding: 0px 24px;
    }
  `}
`