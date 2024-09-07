import React from 'react';
import { Space, Table, Button } from 'antd';
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
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
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
      dueDate: 'Tomorrow',
      skillsTag: [courseNames[0], courseNames[1]],
      description: 'Re-Create your resume as a website using HTML and CSS',
    },
    {
      key: '2',
      serialNo: '2',
      topic: 'Stopwatch',
      dueDate: '15 June 2024',
      skillsTag: [courseNames[0], courseNames[1], courseNames[2]],
      description: 'Use the provided base file and include the Lap Time functionality'
    },
    {
      key: '3',
      serialNo: '3',
      topic: 'LMS Base Layout',
      dueDate: '30 June 2024',
      skillsTag: [courseNames[0], courseNames[1], courseNames[2], courseNames[3]],
      description: 'Create a LMS Base layout from scratch in React',
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

