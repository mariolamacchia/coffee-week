import React from 'react';
import Layout from './UIComponents/Layout';
import Header from './UIComponents/Header';
import Toolbar from './UIComponents/Toolbar';

export default function App() {
  return (
    <Layout>
      <Header />
      <Toolbar>
        <Toolbar.Button>Button 1</Toolbar.Button>
        <Toolbar.Button>Button 2</Toolbar.Button>
        <Toolbar.Button>Button 3</Toolbar.Button>
      </Toolbar>
    </Layout>
  );
}
