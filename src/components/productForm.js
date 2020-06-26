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

let tags_ ;

const { Option } = Select;

const ProductForm = ({handleSubmit}) => {
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    const onFinish = (values) => {
        values.Tags = tags_;
        values.tag = tags_;
        handleSubmit(values);
    };
    const storeTag = (tags) => {
      tags_ = tags;
      console.log(tags_);
    }
    const initialValues = {
        product_name:"",
        prod_desc:"",
        category:"",
        subcategory:"",
        cost:999,
        Tags:[]
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
          
          <Form.Item name="category" label="category" rules={[{ required: true }]}>
              <Select
                placeholder="Select Category"
                allowClear
              >
                <Option value="option-1">option-1</Option>
                <Option value="option-2">option-2</Option>
                <Option value="option-3">option-3</Option>
              </Select>
      </Form.Item>
          
          <Form.Item name="subcategory" label="sub-category" rules={[{ required: true }]}>
              <Select
                placeholder="Select Sub-Category"
                allowClear
              >
                <Option value="option-1-1">option-1-1</Option>
                <Option value="option-2-2">option-2-2</Option>
                <Option value="option-3-3">option-3-3</Option>
              </Select>
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
    
          <Form.Item name="tag" label="Tags" >
              <EditableTagGroup tagRead={storeTag}/>
            
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