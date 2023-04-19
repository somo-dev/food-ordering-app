import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import MainNavigation from './components/MainNavigation';
import FeaturedCarousel from './components/FeaturedCarousel';
import UAParser from "ua-parser-js";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AllRestaurantsTab from './components/AllRestaurantsTab';
import Footer from './components/Footer';
import SearchRestaurantsScreen from './components/SearchRestaurantsScreen';
import Root from './components/Root';
import RestaurantMenu from './components/RestaurantMenu';


function App() {
  const routes = createBrowserRouter([
    {path: '/', element: <Root />, children: [
      {index: true, element: <AllRestaurantsTab />},
      {path: ':restId', element: <RestaurantMenu />},
      {path: 'search', element: <SearchRestaurantsScreen />}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App

// export getProps: GetProps =  async 
