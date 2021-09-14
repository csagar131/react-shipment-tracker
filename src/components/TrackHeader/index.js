import React from 'react';
import { Dropdown, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {HeaderContainer} from './style';
import { MenuOutlined } from '@ant-design/icons';

import { useMediaQuery } from 'react-responsive';


const { Header } = Layout;

const TrackHeader =({brandData}) =>{

    const {header: {header_data =[]} ={}} = brandData;

    const menu = (
        <Menu>
          {/* <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="https://www.aliyun.com">2nd menu item</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">3rd menu item</Menu.Item> */}
          {
            header_data.map((item) =>{
                return(
                <Menu.Item key={item.link}>
                    <Link to={item.link}>
                        {item.item_name}
                    </Link>
                </Menu.Item> 
                )
            }) 
          }
        </Menu>
      );
    
    return(
        <HeaderContainer>
            <Layout>
                <Header className="header">
                    <div>
                        <a href="#">
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/bvo-updated-logo-2.png?v=1624107079" width="200"/>
                        </a>
                    </div>
                    <div>
                        {
                            window.innerWidth > 991 ?
                            <Menu 
                                theme="light" 
                                mode="horizontal" 
                                defaultSelectedKeys={["All products"]} 
                            >
                            {
                                header_data.map((item) =>{
                                    return(
                                        <Menu.Item key={item.link}>
                                            <Link to={item.link}>
                                                {item.item_name}
                                            </Link>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu> :
                        <Dropdown overlay={menu} trigger={['click']}>
                            <MenuOutlined style={{fontSize: 24}} />
                        </Dropdown>
                        }
                    </div>    
                </Header>
            </Layout>
        </HeaderContainer>
    )
}
export default TrackHeader;