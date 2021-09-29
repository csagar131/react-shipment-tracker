import React, {useContext} from 'react';
import { Dropdown, Layout, Menu } from 'antd';
import {HeaderContainer} from './style';
import { MenuOutlined } from '@ant-design/icons';
import { DataContext } from '../../context/dataProvider';


const { Header } = Layout;

const TrackHeader =() =>{

    const { brandDataState } = useContext(DataContext);
    const { brandData: { logo ="" , website ='', other: {header: {header_data =[]} ={}} ={}} ={}} = brandDataState;

    const menu = (
        <Menu>
          {
            header_data.map((item, index) =>{
                return(
                <Menu.Item key={index}>
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
                        <a href={website} target="_blank">
                            <img src={logo} width={'auto'} height={56} />
                        </a>
                    </div>
                    <div>
                        {
                            window.innerWidth > 767 ?
                            <Menu 
                                theme="light" 
                                mode="horizontal" 
                                //defaultSelectedKeys={["All products"]} 
                            >
                            {
                                header_data.map((item, index) =>{
                                    return(
                                        <Menu.Item key={index}>
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