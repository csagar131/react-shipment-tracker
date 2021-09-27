import { Col, Row } from 'antd';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterest,
    FaYoutube,
    FaLinkedin
  } from 'react-icons/fa';

import React, {useContext} from 'react';
import {SocialMediaContainer, FollowUsText, PoweredByText, LogoContainer} from './style';
import { FacebookBrandButton, FlexEndContainer, InstagramBrandButton, LinkedinBrandButton, PintrestBrandButton, TwitterBrandButton, YoutubeBrandButton } from '../UIElements';
import { DataContext } from '../../context/dataProvider';

const Footer =() =>{

  const { brandDataState } = useContext(DataContext);

  const { brandData:{ email, contact, other: {other_details: { primary_color, secondary_font_color } ={}, footer: {social_media =[], call_timings ="",} ={}} ={} } } = brandDataState;
    
    const facebookData = social_media.find(({ title }) => title.toLowerCase() === 'facebook');
    const instagramData = social_media.find(({title}) => title.toLowerCase() === 'instagram' );
    const pinterestData = social_media.find(({title}) => title.toLowerCase() === 'pinterest' );
    const twitterData = social_media.find(({title}) => title.toLowerCase() === 'twitter' );
    const youtubeData =  social_media.find(({title}) => title.toLowerCase() === 'youtube' );
    const linkedinData = social_media.find(({title}) => title.toLowerCase() === 'linkedin' );

    return(
        <Row 
        style={{
            background: `${primary_color ? primary_color : 'black'}`,
            color: `${secondary_font_color ? secondary_font_color : 'white'}`,
            padding: '24px',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>  
            <p>
                Email Us At: {email}
            </p>
            <p>Call Us At : {contact}</p>
            {
              !!call_timings.length && (
                <p>{`(${call_timings})`}</p>
              )
            }
          </Col> 
          <Col xl={8} lg={8} md={8} sm={24} xs={24}> 
            <PoweredByText>Powered By</PoweredByText>
            <LogoContainer>
                <img
                src="https://res.cloudinary.com/pickrr/image/upload/v1617278025/logo/pickrr-logo_pabsny.svg"
                alt="pickrr logo"
                />
            </LogoContainer>
          </Col>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            <FollowUsText> Follow Us </FollowUsText>
            <SocialMediaContainer >
              {
                facebookData && (
                  <FacebookBrandButton
                  shape="circle"
                  icon={
                      <FaFacebookF
                      style={{
                          textAlign: 'center',
                          margin: 'auto',
                          display: 'flex',
                      }}
                      />
                  }
                  onClick={() =>
                      window.open(facebookData.link)
                  }
                  style={{marginLeft: 8}}
                  />
                )
              }
              {
                instagramData && (
                  <InstagramBrandButton
                    shape="circle"
                    icon={
                      <FaInstagram
                        style={{
                          textAlign: 'center',
                          margin: 'auto',
                          display: 'flex',
                        }}
                      />
                    }
                    style={{marginLeft: 8}}
                    onClick={() =>
                      window.open(instagramData.link)
                    }
                  />
                )
              }
              {
                twitterData && (
                  <TwitterBrandButton
                    shape="circle"
                    icon={
                      <FaTwitter
                        style={{
                          textAlign: 'center',
                          margin: 'auto',
                          display: 'flex',
                        }}
                      />
                    }
                    style={{marginLeft: 8}}
                    onClick={() =>
                      window.open(twitterData.link)
                    }
                  />
                )
              }
            {
              pinterestData && (
                <PintrestBrandButton
                  shape="circle"
                  icon={
                    <FaPinterest
                      style={{
                        textAlign: 'center',
                        margin: 'auto',
                        display: 'flex',
                      }}
                    />
                  }
                  style={{marginLeft: 8}}
                  onClick={() =>
                    window.open(pinterestData.link)
                  }
                />
              )
            }
             {
              linkedinData && (
                <LinkedinBrandButton
                  shape="circle"
                  icon={
                    <FaLinkedin
                      style={{
                        textAlign: 'center',
                        margin: 'auto',
                        display: 'flex',
                      }}
                    />
                  }
                  style={{marginLeft: 8}}
                  onClick={() =>
                    window.open(pinterestData.link)
                  }
                />
              )
            }
            {
              youtubeData && (
                <YoutubeBrandButton
                  shape="circle"
                  icon={
                    <FaYoutube
                      style={{
                        textAlign: 'center',
                        margin: 'auto',
                        display: 'flex',
                      }}
                    />
                  }
                  style={{marginLeft: 8}}
                  onClick={() =>
                    window.open(
                      youtubeData.link
                    )
                  }
                />
              )
            }
            </SocialMediaContainer>
          </Col>
    </Row> 
    )
}

export default Footer;