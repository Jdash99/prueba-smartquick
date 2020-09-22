import React, { useState } from "react";
import { withRouter, Redirect } from "react-router";
// import { AuthContext } from "./Auth.js";
import { Form, Input, Button, Layout, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const users = [
  {email:'admin@smartquick.com', name: 'Keanu Reeves', password:'admin', type:'administrador'},
  {email:'dev@smartquick.com', name: 'Jim Carrey', password:'dev', type:'coordinador'}
]

const NormalLoginForm = ({history, handleCurrentUser}) => {
  const [errorMessage, setErrorMessage] = useState("")
  
  const handleLogin = (values) => {
    const { email, password } = values
    const user = users.find(x => x.email === email && x.password === password)
    handleCurrentUser(user)
    if (user) {
      history.push("/");
    } else {
      setErrorMessage('El usuario o la contraseña estan errados')
    }
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout className="test">
      <Row justify="center" align="middle" style={{minHeight: '100vh'}}>
        <Col sm={{span:12}} md={{span:9}} lg={{ span: 7}} xl={{ span: 6}} xxl={{ span: 5}}>
        <Card>
          <h2>Inicio Sesion</h2>
          <Form
            name="normal_login"
            className="login-form"
            onFinish={handleLogin}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Por favor digite su email' }, {type: 'email', message: "Email invalido"}]}
            >
              <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Por favor digite su clave' }]}
            >
              <Input 
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                Ingresar
              </Button>
            </Form.Item>
            <Form.Item>
              <span className="error-message">{errorMessage}</span>
            </Form.Item>
          </Form>
        </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default withRouter(NormalLoginForm);