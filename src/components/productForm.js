import React from "react";
import EditableTagGroup from "./createTags";
import { Form, Input, Button,Select,InputNumber } from 'antd';


const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
const tailLayout = {
    wrapperCol: { offset: 4, span: 8 },
  };

const { TextArea } = Input;
const { Option } = Select;


const ProductForm = () => {
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    const onFinish = (values) => {
        console.log(values);
    };
    const initialValues = {
        
    }
    return (
        <Form
          {...layout}
          name="prodbasic"
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Product Name"
            name="product_name"
            rules={[{ required: true, message: 'Please enter First name' }]}
          >
            <Input.name />
          </Form.Item>
          
          <Form.Item
            label="Product Description"
            name="prod_desc"
            rules={[{ required: true, message: 'Please enter Last name' }]}
          >
            <TextArea 
            placeholder="Please enter description about the product"
            autoSize={{ minRows: 2, maxRows: 6 }}/>
          </Form.Item>
          
          <Form.Item
            label="Category"
            name="category"
          >
            <Input.Group compact>
                <Select defaultValue="Option1-1">
                    <Option value="Option1-1">Option1-1</Option>
                    <Option value="Option1-2">Option1-2</Option>
                    <Option value="Option1-3">Option1-3</Option>
                </Select>
                <Select defaultValue="Option2-2">
                    <Option value="Option2-1">Option2-1</Option>
                    <Option value="Option2-2">Option2-2</Option>
                    <Option value="Option2-3">Option2-3</Option>
                </Select>
            </Input.Group>
          </Form.Item>
          
          <Form.Item
            label="Cost"
            name="cost"
            rules={[{ required: true, message: 'Please enter cost of the product' }]}
          >
             <InputNumber
      defaultValue={1000}
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
    />
          </Form.Item>
    
          <Form.Item name="tag" label="Tags" rules={[{ required: true,message: 'please select tag(s) for your product' }]}>
              <EditableTagGroup />
            
          </Form.Item>
    
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
};

export default ProductForm;