import React, { useEffect, useState } from "react";
import * as Charts from "@ant-design/charts";
import './App.css';
import preData from "./data/pre-data.json";
import postData from "./data/post-data.json";
import { Button, Layout, Menu, Row } from 'antd';
const { DateTime } = require("luxon");

const { Header, Content } = Layout;

const JsonData = {
  preData,
  postData
}

function App() {
  const [graphData, setGraphData] = useState('preData');
  const [time, setTime] = useState(DateTime.now());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(DateTime.now());
    }, 5 * 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div className="p-12">
      <div className="mb-12">
        <div className="text-3xl text-pink-600 float-right">{time.toLocaleString(DateTime.TIME_24_SIMPLE)}</div>
        <div className="text-3xl font-bold text-pink-600">Energieverbruik</div>
        <div className="text-xl">Graafsewijk, 's-Hertogenbosch</div>
      </div>

      <Charts.Line className="mb-12" lineStyle={{ stroke: 'green' }} smooth={true} xField="time" yField="value" yMax data={JsonData[graphData]}></Charts.Line>
      <Button type="primary" onClick={() => setGraphData('postData')}>Change Data</Button>
    </div>
  );
}

export default App;
