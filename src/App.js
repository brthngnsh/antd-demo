import React from 'react';
import { Button } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import './App.css';
import CustomerForm from './components/customerForm';

function App() {
  return (
    <React.Fragment>
    <Button type='primary' icon={<HomeFilled /> } > Home </Button>
    <CustomerForm /></React.Fragment>
  );
}

export default App;
