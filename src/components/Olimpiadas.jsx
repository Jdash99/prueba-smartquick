import React, {useState, useEffect} from 'react';
import { Table, Tabs } from 'antd';
import ResumenMedallas from './ResumenMedallas';

const { TabPane } = Tabs;

const API_URL = "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json";

const columns = [
  {
    title: 'Atleta',
    dataIndex: 'athlete',
    key: 'athlete',
    width: '25%'
  },
  {
    title: 'Edad',
    dataIndex: 'age',
    width: '5%'
  },
  {
    title: 'País',
    dataIndex: 'country',
    width: '15%'
  },
  {
    title: 'Año',
    dataIndex: 'year',
    width: '10%'
  },
  {
    title: 'Fecha',
    dataIndex: 'date',
    width: '10%'
  },
  {
    title: 'Deporte',
    dataIndex: 'sport',
    width: '15%'
  },
  {
    title: 'Oro',
    dataIndex: 'gold',
    width: '5%'
  },
  {
    title: 'Plata',
    dataIndex: 'silver',
    width: '5%'
  },
  {
    title: 'Bronce',
    dataIndex: 'bronze',
    width: '5%'
  },
  {
    title: 'Total',
    dataIndex: 'total',
    width: '5%'
  },
];

const Olimpiadas = () => {
  const [olimpiadasData, setOlimpiadasData] = useState(null)
  const [medalsTotal, setMedalsTotal] = useState({gold: null, silver: null, bronze: null})
  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    const response = await fetch(API_URL)
    const data = await response.json();
    const goldTotal = data.reduce((prev, cur) => prev + cur.gold, 0);
    const silverTotal = data.reduce((prev, cur) => prev + cur.silver, 0);
    const bronzeTotal = data.reduce((prev, cur) => prev + cur.bronze, 0);

    setOlimpiadasData(data)
    setMedalsTotal({gold: goldTotal, silver: silverTotal, bronze: bronzeTotal})
  }

  return (
    <Tabs>
      <TabPane tab="Listado ganadores olimpiadas" key="1">
        <Table size="small" rowKey={row => row.athlete + row.age + row.total} columns={columns} dataSource={olimpiadasData} />        
      </TabPane>
      <TabPane tab="Totales por medalla" key="2">
        <ResumenMedallas medalsTotal={medalsTotal}/>
      </TabPane>
    </Tabs>
  )
}

export default Olimpiadas;