import React from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import PropTypes from 'prop-types';
import Container from './container';

const Header = ({ siteTitle }) => (
  <Headroom
    wrapperStyle={{ marginBottom: '0.725rem' }}
    style={{
      backgroundColor: 'rgb(57, 111, 176)',
    }}
  >
    <Container>
      <h1 style={{
          margin: 0,
          color: 'rgb(252, 253, 254)',
        }}
      >
        Utocity
      </h1>
    </Container>
  </Headroom>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
