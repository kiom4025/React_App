import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import { Link } from 'react-router-dom';
const courseNames = ["HTML", "CSS", "Javascript", "React"];
const columns = [
  {
    title: 'S.No',
    dataIndex: 'serialNo',
    // key: 'serialNo',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Topic',
    dataIndex: 'topic',
    // key: 'topic',
  },
  {
    title: 'Tags',
    // key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          {/* let color = tag.length > 5 ? 'geekblue' : 'green'; */}
          let color;
          if (tag === courseNames[0]) color = 'geekblue';
          if (tag === courseNames[1]) color = 'green';
          if (tag === courseNames[2]) color = 'volcano';
          if (tag === courseNames[3]) color = 'blue';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Due Date',
    dataIndex: 'duedate',
    key: 'duedate',
  },
  {
    title: 'Action',
    key: 'action',
    // dataIndex: 'topic',
    render: (_, record) => (
      <Space size="middle">
      <Button type="primary"><Link to="/assignments/upload">Open</Link></Button>
      </Space>
    ),
  },
];


const data = [
  {
    key: '1',
    serialNo : '1',
    topic: 'Resume website',
    duedate: 'Tomorrow',
    tags: [courseNames[0], courseNames[1]],
  },
  {
    key: '2',
    serialNo : '2',
    topic: 'Stopwatch',
    duedate: '15 June 2024',
    tags: [courseNames[0], courseNames[1], courseNames[2]],
  },
  {
    key: '3',
    serialNo : '3',
    topic: 'LMS Base Layout',
    duedate: '30 June 2024',
    tags: [courseNames[0], courseNames[1], courseNames[2], courseNames[3]],
  },
];
const AssignmentTable = () => <Table columns={columns} dataSource={data} style={{marginTop:"3%"}} />;
export default AssignmentTable;

