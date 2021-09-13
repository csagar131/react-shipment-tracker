import React, { useEffect, useContext } from 'react';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { DataContext } from '../../context/dataProvider';

import Overview from '../Overview';
import TrackingTerms from '../TrackingTerms';
import {
  FacebookBrandButton,
  InstagramBrandButton,
  TwitterBrandButton,
  PintrestBrandButton,
  YoutubeBrandButton,
  SpaceBetweenContainerDesktop,
} from '../UIElements';
import brandData from './data.json'

import { HeaderContainer, ImageContainer } from './style';
import Products from '../Products';
import TrackingPage from '../../pages/TrackingPage';

const MainComponent = () => {
  const history = useHistory();

  const { fetchData, setInput, state } = useContext(DataContext);
  const { data } = state;
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });
  useEffect(() => {
    let query = decodeURI(history.location.search.split('=')[1]);
    if (query && query !== 'undefined') {
      setInput(query);
      fetchData(query);
    } else {
      setInput(null);
    }
  }, [history.location.search]);

  return (
    <div style={{ background: '#E5E5E5', minWidth: '100%' }}>
      {/* <HeaderContainer>
        <div class="header">
          <a href="https://bellavitaorganic.com/" class="logo">
            <img
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/bvo-updated-logo-2.png?v=1624107079"
              width={200}
            />
          </a>
          <div class="header-right">
            <a
              class="active"
              href="https://bellavitaorganic.com/collections/natural-ayurvedic-beauty-care-products"
              target="_blank"
            >
              All Products
            </a>
            <a href="https://bellavitaorganic.com/pages/offer" target="_blank">
              Offers
            </a>
            <a
              href="https://bellavitaorganic.com/pages/gift-cards"
              target="_blank"
            >
              Gift Cards
            </a>
            <a
              href="https://bellavitaorganic.com/pages/build-a-box"
              target="_blank"
            >
              Build a box
            </a>
            <a href="https://bellavitaorganic.com/" target="_blank">
              By Category
            </a>
            <a href="https://bellavitaorganic.com/" target="_blank">
              By Concern
            </a>
            <a href="https://bellavitaorganic.com/" target="_blank">
              By Ingredient
            </a>
            <a href="https://bellavitaorganic.com/" target="_blank">
              Combos
            </a>
            <a
              href="https://bellavitaorganic.com/collections/combos"
              target="_blank"
            >
              Our Celebrities
            </a>
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
              style={{ marginRight: '5px' }}
              onClick={() =>
                window.open('https://www.facebook.com/bellavitaorganic/')
              }
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
              onClick={() =>
                window.open('https://www.instagram.com/bellavita.organic/')
              }
              style={{ marginRight: '5px' }}
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
              onClick={() =>
                window.open('https://twitter.com/bellavita_org?s=08')
              }
              style={{ marginRight: '5px' }}
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
              onClick={() =>
                window.open('https://in.pinterest.com/BellaVitaOrg/_created/')
              }
              style={{ marginRight: '5px' }}
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
              onClick={() =>
                window.open(
                  'https://www.youtube.com/channel/UC6mZXPjbDrjQFzXbiBHoaOA'
                )
              }
              style={{ marginRight: '5px' }}
            />
          </div>
        </div>
        {isTabletOrMobileDevice ? (
          <div style={{ style: 'white' }}>
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
              style={{ marginRight: '5px' }}
              onClick={() =>
                window.open('https://www.facebook.com/bellavitaorganic/')
              }
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
              onClick={() =>
                window.open('https://www.instagram.com/bellavita.organic/')
              }
              style={{ marginRight: '5px' }}
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
              onClick={() =>
                window.open('https://twitter.com/bellavita_org?s=08')
              }
              style={{ marginRight: '5px' }}
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
              onClick={() =>
                window.open('https://in.pinterest.com/BellaVitaOrg/_created/')
              }
              style={{ marginRight: '5px' }}
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
              onClick={() =>
                window.open(
                  'https://www.youtube.com/channel/UC6mZXPjbDrjQFzXbiBHoaOA'
                )
              }
              style={{ marginRight: '5px' }}
            />
          </div>
        ) : null}
      </HeaderContainer> */}
      {/* <ImageContainer> */}
        {/* <Overview />
        {data && (
          <Row>
            <Col
              lg={{ span: 18, offset: 3 }}
              xl={{ span: 18, offset: 3 }}
              sm={{ span: 22, offset: 1 }}
              xs={{ span: 22, offset: 1 }}
            > */}
              {/* <TrackingTerms /> */}
              {/* replace with products */}
              {/* <Products />
            </Col>
          </Row>
        )}
        {data && (
          <div
            style={{
              background: 'black',
              color: 'white',
              padding: '24px',
              marginTop: '12px',
            }}
          >
            <SpaceBetweenContainerDesktop>
              <p>
                Email Us At: shop@bellavitaorganic.com | Call Us At : +91
                9311732440 (Monday-Sunday 10:30 AM - 7 PM)
              </p>
              <div>
                Powered By{' '}
                <img
                  src="https://res.cloudinary.com/pickrr/image/upload/v1617278025/logo/pickrr-logo_pabsny.svg"
                  alt="pickrr logo"
                  style={{ marginLeft: '5px' }}
                />
              </div>
            </SpaceBetweenContainerDesktop>
          </div>
        )}
      </ImageContainer> */}
      <TrackingPage brandData={brandData} />
    </div>
  );
};

export default MainComponent;
