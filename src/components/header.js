import React from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import PropTypes from 'prop-types';
import Container from './container';
import { rhythm } from '../utils/typography';

const Header = ({ siteTitle }) => (
  <Headroom
    wrapperStyle={{ marginBottom: `${rhythm(1)}` }}
    style={{
      backgroundColor: 'rgb(57, 111, 176)',
    }}
  >
    <Container style={{ 
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <Link to={'/'} style={{}} >
       <h1 style={{
           display: 'inline-block',
           margin: 0,
           color: 'rgb(252, 253, 254)',
         }}
       >
         Utocity
       </h1>
      </Link>
      <span style={{ alignSelf: 'center' }}>
        <Link to={'/about/'} >
          About
        </Link>
      </span>
    </Container>
  </Headroom>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
