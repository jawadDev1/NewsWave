import React from 'react';
import NavStack from '../components/NavStack';
import Home from './Home';

const HomeStack = () => {
  return <NavStack mainRoute="Home" mainComponent={Home} />;
};

export default HomeStack;
