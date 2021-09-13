import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {HeaderContainer} from './style';


const { Header } = Layout;

const TrackHeader =({brandData}) =>{

    const {header: {header_data =[]} ={}} = brandData;
    
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
                    </Menu>
                    </div>    
                </Header>
            </Layout>
        </HeaderContainer>
    )
}
export default TrackHeader;