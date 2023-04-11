import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MainNavigation from './components/MainNavigation';
import FeaturedCarousel from './components/FeaturedCarousel';
import UAParser from "ua-parser-js";
import { createBrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AllRestaurantsTab from './components/AllRestaurantsTab';
import Footer from './components/Footer';
import SearchRestaurantsScreen from './components/SearchRestaurantsScreen';


function App({deviceType}: any) {
  const routes = createBrowserRouter([
    {path: '/', }
  ])
  return (
    <div className="App">
      <MainNavigation />
      <FeaturedCarousel deviceType={deviceType} />
      <Container className='my-4'>
        <AllRestaurantsTab />
      </Container>
      <SearchRestaurantsScreen />
      <Footer />
    </div>
  );
};
App.getInitialProps = ({ req }: any) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
export default App

// export getProps: GetProps =  async 
