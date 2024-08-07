import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function AssignmentTable() {
  const navigate = useNavigate();

  const courseNames = ["HTML", "CSS", "Javascript", "React"];
  const columns = [
    {
      title: 'S.No',
      dataIndex: 'serialNo',
      // key: 'serialNo',
      // render: (text) => <a>{text}</a>,
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
          <Button type="primary" onClick={() => navigate('/assignments/upload')} id={'AssignmentTask_' + record.key}>Open</Button>
        </Space>
      ),
    },
  ];


  const data = [
    {
      key: '1',
      serialNo: '1',
      topic: 'Resume website',
      duedate: 'Tomorrow',
      tags: [courseNames[0], courseNames[1]],
      descriptionsText: 'Re-Create your resume as a website using HTML and CSS',
    },
    {
      key: '2',
      serialNo: '2',
      topic: 'Stopwatch',
      duedate: '15 June 2024',
      tags: [courseNames[0], courseNames[1], courseNames[2]],
      descriptionsText: 'Use the provided base file and include the Lap Time functionality'
    },
    {
      key: '3',
      serialNo: '3',
      topic: 'LMS Base Layout',
      duedate: '30 June 2024',
      tags: [courseNames[0], courseNames[1], courseNames[2], courseNames[3]],
      descriptionsText: 'Create a LMS Base layout from scratch in React',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
    />
  )
}


export default AssignmentTable;

