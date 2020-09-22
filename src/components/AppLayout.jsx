import React from 'react';
import { withRouter } from "react-router";
import { Layout, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import Olimpiadas from './Olimpiadas';
import logo from '../logo.svg';
import maintenance from '../maintenance.png';

const { Header, Content } = Layout

const ShowByType = ({user}) => {
  if (user.type === "administrador") {
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

// const AppLayout = ({currentUser}) => {
const AppLayout = ({history}) => {
  const signOut = () => {
    localStorage.clear()
    history.push("/login");
  }
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  return (
    <Layout>
      <Header>
        <div className="header-container">
          <div className="logo"><img src={logo} alt="Logo" /></div>
          <Space>
            <div><i>{currentUser.name}</i> | {currentUser.type}</div>
            <PoweroffOutlined style={{ fontSize: '18px' }} onClick={signOut} />
          </Space>
        </div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <ShowByType user={currentUser}/>
        </div>
      </Content>
    </Layout>
  )
}

export default withRouter(AppLayout);
