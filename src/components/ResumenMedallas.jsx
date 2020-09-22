import React from 'react';
import { Row, Col, Card, Popover } from 'antd';

const { Meta } = Card;

const ResumenMedallas = ({medalsTotal}) => {
  return (
    <div className="medalsContainer">
      <Row gutter={16}>
        <Col span={8}>
          <Popover
            content="Esta es una descripcion del total de las medallas de oro"
            title="Total medallas de oro"
            trigger="click"
          >
            <Card
              className="medalBox"
              cover={<img alt="example" src="assets/gold-medal.svg" />}
            >
              <Meta title="Medallas de oro" description={medalsTotal.gold} />
            </Card>
          </Popover>
        </Col>
        <Col span={8}>
          <Popover
              content="Esta es una descripcion del total de las medallas de plata"
              title="Total medallas de plata"
              trigger="click"
          >
            <Card
              className="medalBox"
              cover={<img alt="example" src="assets/silver-medal.svg" />}
            >
              <Meta title="Medallas de plata" description={medalsTotal.silver} />
            </Card>
          </Popover>
        </Col>
        <Col span={8}>
        <Popover
          content="Esta es una descripcion del total de las medallas de bronce"
          title="Total medallas de bronce"
          trigger="click"
        >
        <Card
          className="medalBox"
          cover={<img alt="example" src="assets/bronze-medal.svg" />}
        >
          <Meta title="Medallas de bronce" description={medalsTotal.bronze} />
        </Card>
      </Popover>
      </Col>
      </Row>
    </div>

  )
}

export default ResumenMedallas;