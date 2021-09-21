import React from 'react';
import { Dropdown, Layout, Menu } from 'antd';
import {HeaderContainer} from './style';
import { MenuOutlined } from '@ant-design/icons';

import { useMediaQuery } from 'react-responsive';


const { Header } = Layout;

const TrackHeader =({brandData}) =>{

    const {logo ="" , other: {header: {header_data =[]} ={}} ={}} = brandData;

    const menu = (
        <Menu>
          {
            header_data.map((item) =>{
                return(
                <Menu.Item key={item.link}>
                    <a href={item.link} target="_blank">
                        {item.item_name}
                    </a>
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
                            <img src={logo} width="200"/>
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
                                            <a href={item.link} target="_blank">
                                                {item.item_name}
                                            </a>
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