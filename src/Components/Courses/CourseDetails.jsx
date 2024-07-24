import React from 'react';
import { Badge, Descriptions } from 'antd';
import LearningPlan from './LearningPlan';
const items = [
  {
    key: '1',
    label: 'Title',
    children: 'Full Stack Development',
    span: 2,
  },
  {
    key: '2',
    label: 'Created By',
    children: 'Mathi',
    span: 2,
  },
  {
    key: '3',
    label: 'Description',
    children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    span: 4,
  },
  {
    key: '4',
    label: 'Skills Covered',
    children: 'HTML, CSS, JS, React, Mongodb',
    span: 2,
  },
  {
    key: '5',
    // label: 'Status',
    label: (
      <>
        Status /
        <br />
        Available Slot
      </>
    ),
    /* Note: Set a condition to the data of this.
        1. Data obtained from 'Available slot' field of the course creation form will be populated here
        2. If the date is past current date then the course is set to be live
        3. If not then next available slot is shown
        4. If there is no data then it should say "Contact support team"
    */
    children: <Badge status="processing" text="Live" />,
    span: 3,
  },
  {
    key: '6',
    label: 'Language',
    children: 'Tamil',
  },
  {
    key: '7',
    label: 'Price',
    children: '$20.00',
  },
  {
    key: '8',
    label: 'Duration',
    children: '4 Months',
  },
  {
    key: '9',
    label: 'Additional Features',
    children: (
      <>
        - Python Game Development
        <br />
        - Github
      </>
    ),
    span: 4,
  },
  {
    key: '10',
    label: 'Class Schedule',
    children: (
      <>
        - 50+ Live Sessions
        <br />
        - Weekly 3 classes (Alternate Days)
        <br />
        - Sunday Doubt Clearing Sessions
      </>
    ),
    span: 4,
  },
  {
    key: '11',
    label: 'Learning Plan',
    children: (
      <LearningPlan />
    ),
    span: 4,
  },
];
const CourseDetails = () => <Descriptions title="Course Details" bordered items={items} />;
export default CourseDetails;