import React from 'react';
import Layout from './UIComponents/Layout';
import Header from './Core/Header';
import Navigation from './Core/Navigation';

export default function App() {
  return (
    <Layout>
      <Header />
      <Navigation />
    </Layout>
  );
}
