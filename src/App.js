import React from 'react';
import { Layout } from 'antd';
import logo from './logo.svg';
import './App.css';

import Olimpiadas from './components/Olimpiadas';

const { Header, Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Olimpiadas />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
