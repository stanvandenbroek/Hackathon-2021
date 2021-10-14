import * as Charts from "@ant-design/charts";
import './App.css';
import preData from "./data/pre-data.json";
import postData from "./data/post-data.json";
import { Layout, Menu, Space } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
        <Layout className="layout">
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item active key={1}>Home</Menu.Item>
                <Menu.Item active key={2}>About</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '50px 50px' }}>
            <Space direction="vertical">
            <Charts.Line smooth={true} xField="time" yField="value" data={preData}></Charts.Line>
            <Charts.Line smooth={true} xField="time" yField="value" data={postData}></Charts.Line>
            </Space>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>,
    </div>
  );
}

export default App;
