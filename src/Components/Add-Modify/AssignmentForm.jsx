import React from 'react';
import { Button, Flex, Form, Input, DatePicker } from 'antd';
// const onChange = (e) => {
//   console.log('Change:', e.target.value);
// };
const AssignmentForm = () => {
  const [form] = Form.useForm();
  const onReset = ()=>{
    form.resetFields();
  }
  const onFinish = (values) => {
    console.log('Success:', values);
    onReset();
  };
  return (
    <Form
      form={form}
      scrollToFirstError
      style={{
        paddingBlock: 32,
      }}
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 14,
      }}
      onFinish={onFinish}
    >

      <Form.Item
        name="topic"
        label="Assignment Topic"
        rules={[
          {
            required: true,
            message: 'Topic required',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Description required',
          },
        ]}
        >
        <Input.TextArea
          showCount
          maxLength={500}
          // onChange={onChange}
          // placeholder="disable resize"
          style={{
            height: 100,
            // resize: 'none',
          }}
        />
      </Form.Item>

      <Form.Item 
      name="dueDate"
      label="Due Date"
      >
          <DatePicker />
        </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 10,
        }}
      >

        <Flex gap='large'>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button danger onClick={onReset}>
            Reset
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
};
export default AssignmentForm;