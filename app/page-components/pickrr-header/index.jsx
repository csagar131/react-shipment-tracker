import React, { useContext } from "react";
import "antd/dist/antd.css";
import { HeaderContainer } from "./style";
import DataContext from "~/context/data-context";
import { Dropdown, Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const PickrrHeader = () => {
  const context = useContext(DataContext);
  const headerNavList = context.sellerData?.other?.header?.header_data;
  const { Header } = Layout;

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  const menu = (
    <Menu>
      {headerNavList?.map((item, index) => {
        return (
          <Menu.Item key={index}>
            <a href={item.link} target="_blank">
              {item.item_name}
            </a>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <HeaderContainer>
      <Layout>
        <Header className="header">
          <div>
            <a href={context?.sellerData?.website_url} target="_blank">
              <img src={context?.sellerData?.logo} width={80} height={50} />
            </a>
          </div>
          <div>
            {!isMobileDevice ? (
              <Menu
                theme="light"
                mode="horizontal"
              >
                {headerNavList?.map((item, index) => {
                  return (
                    <Menu.Item key={index}>
                      <a href={item.link} target="_blank">
                        {item.item_name}
                      </a>
                    </Menu.Item>
                  );
                })}
              </Menu>
            ) : (
              <Dropdown overlay={menu} trigger={["click"]}>
                <MenuOutlined style={{ fontSize: 24 }} />
              </Dropdown>
            )}
          </div>
        </Header>
      </Layout>
    </HeaderContainer>
  );
};
export default PickrrHeader;

//"https://d10srchmli830n.cloudfront.net/1652868953482_38eddf50-89ad-4916-adea-0861e26a95b4_Group-(1).svg"
