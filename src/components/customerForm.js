import { Form, Input, Button, Checkbox,Select } from 'antd';
import React, { useState } from "react";
import  AvatarLoader  from "./avatarLoader";


const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 8 },
};

const { Option } = Select;

const CustomerForm = ({handleonFinish}) => {
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const initialValues = {
      fname:"",
      lname:"",
      address:"",
      phno:null,
      avatar:"",
      gender:""
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={initialValues}
      onFinish={handleonFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="First Name"
        name="fname"
        rules={[{ required: true, message: 'Please enter First name' }]}
      >
        <Input.name />
      </Form.Item>
      
      <Form.Item
        label="Last Name"
        name="lname"
        rules={[{ required: true, message: 'Please enter Last name' }]}
      >
        <Input.name />
      </Form.Item>
      
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please enter your address' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Contact"
        name="phno"
        rules={[{ required: true, message: 'Please enter your contact no.' }]}
      >
        <Input type='tel' />
      </Form.Item>

      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Avatar"
        name="avatar"
      >
        <AvatarLoader />
        <h4>if no image is uploaded , default is set as avatar</h4>
      </Form.Item>


      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomerForm;