import React, { useState } from 'react';
import { DesktopOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const items = [
  { 
    label: 'Courses',
    key: 'CourseMenu',
    icon: <DesktopOutlined />,
    children: [
      {
        label: <Link to="editCourses">Full Stack Development</Link>,
        key: 'Course:1',
      },
      {
        label: <Link to="editCourses">Database</Link>,
        key: 'Course:2',
      },
      {
        label: <Link to="editCourses">Python</Link>,
        key: 'Course:3',
      },
      {
        label: <Link to="editCourses">Data Structure and Algorithms</Link>,
        key: 'Course:4',
      },
    ],
  },
  {
    label: 'Assignment',
    key: 'TaskMenu',
    icon: <UserOutlined />,
    children: [
      {
        label: <Link to="editAssignment">Assignment 1</Link>,
        key: 'Task:1',
      },
      {
        label: <Link to="editAssignment">Assignment 2</Link>,
        key: 'Task:2',
      },
    ],
  },

];
const ModifyNavigation = () => {
  const [current, setCurrent] = useState();
  const onClick = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default ModifyNavigation;