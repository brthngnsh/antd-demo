import React from 'react';
import { Button } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import './App.css';

function App() {
  return (
    <Button type='primary' icon={<HomeFilled /> } > Home </Button>
  );
}

export default App;
