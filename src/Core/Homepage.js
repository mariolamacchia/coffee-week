import React from 'react';
import Layout from '../UIComponents/Layout';
import Header from './Header';
import Navigation from './Navigation';

export default function Homepage() {
  return (
    <Layout>
      <Header />
      <Navigation />
    </Layout>
  );
}
