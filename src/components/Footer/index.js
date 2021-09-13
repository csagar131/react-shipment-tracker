import { Col, Row } from 'antd';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterest,
    FaYoutube,
  } from 'react-icons/fa';

import React from 'react';
import { FacebookBrandButton, FlexEndContainer, InstagramBrandButton, PintrestBrandButton, SpaceAroundContainer, TwitterBrandButton, YoutubeBrandButton } from '../UIElements';

const Footer =({brandData}) =>{
    const {footer: {email, contact_number, other_information}} = brandData;
    return(
        <Row 
        style={{
            background: 'black',
            color: 'white',
            padding: '24px',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>  
            <p>
                Email Us At: {email}
            </p>
            <p>Call Us At : {contact_number}</p>
            <p>{`(${other_information})`}</p>
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
                    window.open('https://www.facebook.com/bellavitaorganic/')
                }
                style={{marginLeft: 8}}
                />
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
                window.open('https://www.instagram.com/bellavita.organic/')
              }
            />
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
                window.open('https://twitter.com/bellavita_org?s=08')
              }
            />
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
                window.open('https://in.pinterest.com/BellaVitaOrg/_created/')
              }
            />
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
                  'https://www.youtube.com/channel/UC6mZXPjbDrjQFzXbiBHoaOA'
                )
              }
            />
            </FlexEndContainer>
          </Col>
    </Row> 
    )
}

export default Footer;