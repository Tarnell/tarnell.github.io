import React from 'react';

import { HomePageSection, InvitationMessage } from 'app/Components';

import CatWithFriend from './images/cat_with_friend_sm.jpg';
import ExistentialCrisisCat from './images/existential_crisis_cat_sm.jpg';
import SpookedCat from './images/spooked_cat_sm.jpg';

import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.home}>
    <InvitationMessage />
    <HomePageSection image={CatWithFriend} sectionHeading="announcement_header" sectionContent="announcement_content" />
    <HomePageSection image={ExistentialCrisisCat} sectionHeading="information_itinerary" sectionContent="itinerary" imageOnRight />
    <HomePageSection image={SpookedCat} sectionHeading="rsvp_heading" sectionContent="rsvp_details" />
  </div>
);

export default Home;
