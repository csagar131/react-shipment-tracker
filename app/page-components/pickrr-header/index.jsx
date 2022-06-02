import React, { useContext } from "react";
import "antd/dist/antd.css";
import { HeaderContainer } from "./style";
import DataContext from "~/context/data-context";

const PickrrHeader = () => {
  const context = useContext(DataContext);
  const headerNavList = context.sellerData?.other?.header?.header_data;

  return (
    <HeaderContainer>
      <img
        src={context?.sellerData?.logo}
        alt="pickrr_logo"
        width={80}
        height={50}
      />
      <div className="social-icon-container">
        {/* <img src="https://d10srchmli830n.cloudfront.net/1652950946901_035ad2b7-09b4-4e78-93c3-c310286c3e8b_bi_facebook.svg" />
        <img src="https://d10srchmli830n.cloudfront.net/1652951753044_dfe97bf5-728b-4c52-a9ba-65561a435e50_bx_bxl-instagram-alt.svg" />
        <img src="https://d10srchmli830n.cloudfront.net/1652952861732_4e75d8e1-053e-4a46-ad09-6b2e83205c88_typcn_social-twitter.svg" />
        <img src="https://d10srchmli830n.cloudfront.net/1652952783327_f0130071-fcbd-4fca-b1a0-d174ca65626f_typcn_social-youtube.svg" /> */}

        {headerNavList?.map((navItem) => {
          return (
            <div style={{ display: "inline", margin : '0 8px'}} key={navItem.link}>
              <a href={navItem.link} target="_blank" style={{ color : '#38446D', fontSize :'14px', fontWeight : '600' }}>{navItem.item_name}</a>
            </div>
          );
        })}
      </div>
    </HeaderContainer>
  );
};
export default PickrrHeader;


//"https://d10srchmli830n.cloudfront.net/1652868953482_38eddf50-89ad-4916-adea-0861e26a95b4_Group-(1).svg"