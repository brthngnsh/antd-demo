import React, { useState } from 'react';
import { Table } from 'antd';
import './App.css';
import CustomerForm from './components/customerForm';
import ProductForm from "./components/productForm";

function App() {
  const [val,setVal] = useState([]);
  const [values,setValues] = useState([]);
  const handleOnFinish = (data) => {
    setValues([...values,{
      key:values.length+1,
      fname:data.fname,
      lname:data.lname,
      address:data.address,
      gender:data.gender,
    }
    ]);
  }

  const valueSubmit = (data) => {
    console.log(data);
    setVal([...val,{
      key:val.length+1,
      prod:data.product_name,
      desc:data.prod_desc,
      cat:data.category,
      subcat:data.subcategory,
      cost:data.cost,
    }]);
  }
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'fname',
      key: 'fname',
      filters: [
        {
          text: 'Barathan',
          value: 'Barathan',
        },
        {
          text: 'Ganesh',
          value: 'Ganesh',
        },],
        onFilter: (value, record) => record.fname.indexOf(value) === 0,
    sorter: (a, b) => a.fname.length - b.name.flength,
    sortDirections: ['descend'],
    },
    {
      title: 'Last Name',
      dataIndex: 'lname',
      key: 'lname',
      filters: [
        {
          text: 'Barathan',
          value: 'Barathan',
        },
        {
          text: 'Ganesh',
          value: 'Ganesh',
        },],
        onFilter: (value, record) => record.lname.indexOf(value) === 0,
    sorter: (a, b) => a.lname.length - b.lname.length,
    sortDirections: ['descend'],
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      filters: [
        {
          text: 'male',
          value: 'male',
        },
        {
          text: 'female',
          value: 'female',
        },
      {
        text: 'other',
        value:'other',
      },],
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
      sorter: (a, b) => a.gender.length - b.gender.length,
      sortDirections: ['descend'],
    },
  ];

  const columns1 = [
    {
      title:"Product Name",
      dataIndex:'prod',
      key:'prod',
    },
    {
      title:'Product Description',
      dataIndex:'desc',
      key:'desc',
    },
    {
      title:'Cost',
      dataIndex:'cost',
      key:'cost',
    },
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <React.Fragment>
      <h1>Registration Form</h1>
    <CustomerForm handleonFinish={handleOnFinish} />
    <h1>Registry Data</h1>
    <Table dataSource={values} columns={columns} onChange={onChange}/>;
    <h1>Prduct Entry</h1>
    <ProductForm handleSubmit={valueSubmit}/>
    <h1>Product data</h1>
    <Table dataSource={val} columns={columns1} onChange={onChange}/>;
    </React.Fragment>
  );
}

export default App;
