import React from 'react';
import { Button, Flex, Form, Input, Select, Rate, DatePicker, InputNumber } from 'antd';
const { Option } = Select;
const onFinish = (values) => {
  console.log('Success:', values);
};
// const onChange = (e) => {
//   console.log('Change:', e.target.value);
// };
const CourseForm = () => {
  const [form] = Form.useForm();
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
        name="courseTitle"
        label="Course Title"
        rules={[
          {
            required: true,
            message: 'Title required',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Short Description"
        name="shortDescription">
        <Input.TextArea
          showCount
          maxLength={100}
          // onChange={onChange}
          // placeholder="disable resize"
          style={{
            height: 40,
            resize: 'none',
          }}
        />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description">
        <Input.TextArea
          showCount
          maxLength={300}
          // onChange={onChange}
          // placeholder="disable resize"
          style={{
            height: 100,
            resize: 'none',
          }}
        />
      </Form.Item>

      <Form.Item label="Difficulty" name="difficulty">
        <Select
          options={[
            {
              label: 'Beginner',
              value: 'beginner',
            },
            {
              label: 'Intermediate',
              value: 'intermediate',
            },
            {
              label: 'Advanced',
              value: 'advanced',
            },
          ]}
        />
      </Form.Item>

      <Form.Item
        name="courseDuration"
        label="Duration"
        rules={[
          {
            required: true,
            message: 'Duration required',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="language-Selection"
        label="Language"
        rules={[
          {
            required: true,
            message: 'Please select a Language!',
            type: 'array',
          },
        ]}
      >
        <Select mode="multiple" >
          <Option value="tamil">Tamil</Option>
          <Option value="english">English</Option>
          <Option value="others">Others</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="skills-covered"
        label="Skills Covered"
        rules={[
          {
            required: true,
            message: 'Please choose atleast one',
            type: 'array',
          },
        ]}
      >
        <Select mode="multiple" >
          <Option value="javascript">Javascript</Option>
          <Option value="html">HTML</Option>
          <Option value="css">CSS</Option>
          <Option value="react">React</Option>
          <Option value="mongodb">Mongodb</Option>
          <Option value="git">Git</Option>
          <Option value="vscode">Visual Studio Code (IDE)</Option>
        </Select>
      </Form.Item>


      <Form.Item
        name="createdBy"
        label="Created By"
        rules={[
          {
            required: true,
            message: 'Author required',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="classSchedule"
        label="Class Schedule"
      >
        <Input />
      </Form.Item>
      <Flex justify='space-evenly'>
        <Form.Item
          name="availableSlotDate"
          label="Available slot"
          labelCol={{ span: 10 }}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="ratingStarValue"
          label="Ratings"
          labelCol={{ span: 10 }}
          style={{ width: 250 }}
        >
          <Rate />
        </Form.Item>
      </Flex>
      <Flex justify='space-evenly'>
        <Form.Item
          label="Reviews"
          name="reviewCount"
          labelCol={{ span: 10 }}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Price"
          name="totalPrice"
          labelCol={{ span: 10 }}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Discount"
          name="discountPercentage"
          labelCol={{ span: 10 }}
        >
          <InputNumber />
        </Form.Item>


      </Flex>
      <Form.Item
        wrapperCol={{
          offset: 10,

        }}
      >

        <Flex gap='large'>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button danger onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
};
export default CourseForm;