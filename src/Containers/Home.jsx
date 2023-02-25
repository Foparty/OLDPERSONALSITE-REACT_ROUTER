import React from 'react';
import './Home.css';
import { Knowntech, Landing } from '../Components';
import Paralax from './Paralax';
import { Workpreview } from './';

const Home = () => {
  return (
    <>
      <Landing />
      <Knowntech />
      {/* <Paralax /> */}
      <Workpreview />
    </>
  );
};

export default Home;
