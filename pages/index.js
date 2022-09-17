import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <b>Contact Info</b>
      <p> Phone number: 09935250728 </p>
      <p> Email: ralphe.jakeson@gmail.com </p>
      <p> Address: 399 San Nicolas, City of San Fernando, Pampanga </p>
      <b> Short Description </b>
        <p>I am Raphael Jacob A. Flores I was born on November 2 of the year 2000 and a 21 year old male student of the University of the Assumption, BS-Cpe-4A.
          I have many hobbies such includes reading, watching, and learning.
        </p>
        <b>Skills</b>
        <p> Problem solving, Coding, Technical Skills, Cooking,
            Communication Skills, Strategic Analysis, Team Management,
            Tool Handling, Fast Learner
        </p>
        <b>Education Attainment</b>
        <p>Grade School: University of the Assumption - 2004-2013</p>
        <p>Junior High School: University of the Assumption - 2013-2017</p>
        <p>Senior High School: University of the Assumption, STEM strand - 2017-2019</p>
        <p>College: University of the Assumption, College of Engineering and Architecture, BS-Cpe - 2019-present</p>
      </section>
    </Layout>
  );
}
