import { Col, Row } from 'antd';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterest,
    FaYoutube,
    FaLinkedin
  } from 'react-icons/fa';

import React from 'react';
import { FacebookBrandButton, FlexEndContainer, InstagramBrandButton, LinkedinBrandButton, PintrestBrandButton, TwitterBrandButton, YoutubeBrandButton } from '../UIElements';

const Footer =({brandData}) =>{

  const {email, contact, other: {other_details: { primary_color, secondary_font_color } ={}, footer: {social_media =[], call_timings ="",} ={}} ={}  } = brandData;
    
    const facebookData = social_media.find(({ title }) => title === 'facebook');
    const instagramData = social_media.find(({title}) => title === 'instagram' );
    const pinterestData = social_media.find(({title}) => title === 'pinterest' );
    const twitterData = social_media.find(({title}) => title === 'twitter' );
    const youtubeData =  social_media.find(({title}) => title === 'youtube' );
    const linkedinData = social_media.find(({title}) => title === 'linkedin' );

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
              call_timings.length && (
                <p>{`(${call_timings})`}</p>
              )
            }
          </Col> 
          <Col xl={8} lg={8} md={8} sm={24} xs={24} style={{textAlign: 'center'}}> 
            <p>Powered By</p>
            <div>
                <img
                src="https://res.cloudinary.com/pickrr/image/upload/v1617278025/logo/pickrr-logo_pabsny.svg"
                alt="pickrr logo"
                style={{ marginLeft: '5px' }}
                />
            </div>
          </Col>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
              <p style={{textAlign: 'right'}}> Follow Us </p>
            <FlexEndContainer>
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
            </FlexEndContainer>
          </Col>
    </Row> 
    )
}

export default Footer;