import React from 'react';
import Container from '../../components/container';
import Layout from '../../components/layout';
import styles from './about.module.css';
import Img from 'gatsby-image';
import DyyDrinkingJuice from '../../components/dyy_drinking_juice'; 

// <img src={props.avatar} className={styles.avatar} alt="">

const Dyy = props => (
  <div className={styles.user}>
    <DyyDrinkingJuice />
    <div className={styles.description}>
      <h2 className={styles.username}>DYY</h2>
      <p className={styles.excerpt}>
        This guy's everyday routine: Eating, Playing, Smiling, Crying and Sleeping.
      </p>
    </div>
  </div>
);

export default () => (
  <Layout>
    <Container>
      <h1>About Utocity</h1>
      <p>A little tiny world created by <a href="mailto:douxing1983@163.com">dx</a>.</p>

      <Dyy />
    </Container>
  </Layout>
);
