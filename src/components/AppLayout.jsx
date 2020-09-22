import React from 'react';
import { Layout } from 'antd';
import Olimpiadas from './Olimpiadas';
import logo from '../logo.svg';
import maintenance from '../maintenance.png';

const { Header, Content } = Layout

const ShowByType = ({user}) => {
  if (user.type === "administrador") {
    console.log("here")
    return <Olimpiadas />
  }
  if (user.type === "coordinador") {
    return (
      <div className="box">
        <img src={maintenance} alt="maintenance"></img>
        <h1 className="maintenanceMessage">Lo sentimos, nos encontramos en mantenimiento</h1>
      </div>
    )
  }
  return <div></div>
}

const AppLayout = ({currentUser}) => {
  return (
    <Layout>
      <Header>
        <div className="header-container">
          <div className="logo"><img src={logo} alt="Logo" /></div>
          <div><i>{currentUser.name}</i> | {currentUser.type}</div>
        </div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          {/* <Olimpiadas /> */}
          <ShowByType user={currentUser}/>
        </div>
      </Content>
    </Layout>
  )
}

export default AppLayout;
