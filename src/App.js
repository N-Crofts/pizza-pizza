import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SplashImage from './components/SplashImage';
import Description from './components/Description';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import Location from './components/Location';
import LocationList from './components/Location';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <SplashImage />
      <Description />
      <Menu />
      <MenuItem />
      <Location />
      <LocationList />
      <Contact />
      </div>
    )
  }
}



export default App;
