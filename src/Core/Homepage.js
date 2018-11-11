import React from 'react';
import Layout from '../UIComponents/Layout';
import Header from './Header';
import Navigation from './Navigation';
import Employees from '../CoffeeWeek/Employees';

export default function Homepage() {
  return (
    <Layout>
      <Header />
      <Navigation />
      <Employees />
    </Layout>
  );
}
