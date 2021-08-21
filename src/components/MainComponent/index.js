import React, { useEffect, useContext } from 'react';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';

import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { DataContext } from '../../context/dataProvider';

import Overview from '../Overview';
import TrackingTerms from '../TrackingTerms';
import { FacebookBrandButton, InstagramBrandButton } from '../UIElements';

import { HeaderContainer, ImageContainer } from './style';
import Products from '../Products';

const MainComponent = () => {
  const history = useHistory();

  const { fetchData, setInput, state } = useContext(DataContext);
  const { data } = state;

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
      <HeaderContainer>
        <div class="header">
          <a href="#default" class="logo">
            <img
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/bvo-updated-logo-2.png?v=1624107079"
              width={200}
            />
          </a>
          <div class="header-right">
            <a class="active" href="#home">
              All Products
            </a>
            <a href="#contact">Offers</a>
            <a href="#about">Gift Cards</a>
            <a href="#about">Build a box</a>
            <a href="#about">By Category</a>
            <a href="#about">By Concern</a>
            <a href="#about">By Ingredient</a>
            <a href="#about">Combos</a>
            <a href="#about">Our Celebrities</a>
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
            />
          </div>
        </div>
      </HeaderContainer>

      <ImageContainer>
        <Overview />
        {data && (
          <Row>
            <Col
              lg={{ span: 18, offset: 3 }}
              xl={{ span: 18, offset: 3 }}
              sm={{ span: 22, offset: 1 }}
              xs={{ span: 22, offset: 1 }}
            >
              {/* <TrackingTerms /> */}
              {/* replace with products */}
              <Products />
            </Col>
          </Row>
        )}
      </ImageContainer>
    </div>
  );
};

export default MainComponent;
