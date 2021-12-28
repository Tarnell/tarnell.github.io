import React from 'react';
import { BrandLogo } from 'app/Components';
import FooterSegment from './FooterSegment/FooterSegment';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <FooterSegment content="post_address" />
    <FooterSegment content="copyright" />
    <BrandLogo />
  </div>
);

export default Footer;
