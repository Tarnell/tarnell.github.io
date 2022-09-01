import React from 'react';

import { HomePageSection, InvitationMessage } from 'app/Components';

import FirstPhoto from './images/Engagement(12).jpg';
import SecondPhoto from './images/Engagement(103).jpg';
import ThirdPhoto from './images/Engagement(32).jpg';

import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.home}>
    <InvitationMessage />
    <HomePageSection image={FirstPhoto} sectionHeading="announcement_header" sectionContent="announcement_content" />
    <HomePageSection image={SecondPhoto} sectionHeading="information_itinerary" sectionContent="itinerary" imageOnRight />
    <HomePageSection image={ThirdPhoto} sectionHeading="rsvp_heading" sectionContent="rsvp_details" />
  </div>
);

export default Home;
