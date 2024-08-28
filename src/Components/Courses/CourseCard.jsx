import React from 'react';
import {
  ClockCircleTwoTone,
} from '@ant-design/icons';
import { Badge, Card, Rate, Button, Space, Typography, Divider, List } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Text, Paragraph, Link } = Typography;

const data = [
  {
    courseTitle: 'Full Stack Development',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    difficulty: 'Advanced',
    courseDuration: '3 months',
    createdBy: 'Mathiarasan',
    ratingStarValue: 4,
    reviewCount: 611,
    discountPercentage: 15,
  },
  {
    courseTitle: 'Data Structure and Algorithms',
    shortDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    difficulty: 'Intermediate',
    courseDuration: '15hr 20min',
    createdBy: 'Mathiarasan',
    ratingStarValue: 2.5,
    reviewCount: 81,
    discountPercentage: 25,
  },
  {
    courseTitle: 'Python',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    difficulty: 'Intermediate',
    courseDuration: '1 month',
    createdBy: 'Mathiarasan',
    ratingStarValue: 3,
    reviewCount: 122,
    discountPercentage: 10,
  },
  {
    courseTitle: 'Database',
    shortDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    difficulty: 'Intermediate',
    courseDuration: '22hr 12min',
    createdBy: 'Mathiarasan',
    ratingStarValue: 2.5,
    reviewCount: 52,
    discountPercentage: 25,
  },
  
];

function CustomCourseCard() {
  const navigate = useNavigate();
  return (
    <List
    grid={{
      gutter: 50,
    }}
    style={{display:'flex', justifyContent:'center'}}
    dataSource={data}
    renderItem={(item) => (
      <List.Item style={{marginTop:'12%',}}>
    <Badge.Ribbon text={item.discountPercentage + "% off"} placement='end'>
      <Card
        style={{
          width: 250,
          boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.15)',
          borderRadius: '12px',
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }

      >
        <Space direction='vertical' size={''}>
          <Button type="primary" size='small'>{item.difficulty}</Button>
          <Text strong>{item.courseTitle}</Text>
          <Paragraph
            ellipsis={
              {
                rows: 2,
                expandable: true,
                symbol: 'more'
              }
            }
            type='secondary'
            style={{ fontSize: 11, marginBottom: '3px' }}
          >
            {item.shortDescription}
          </Paragraph>

          <div style={{ margin: '5px 0px' }}><ClockCircleTwoTone />&nbsp;<Link>Duration:&nbsp;</Link><Text>{item.courseDuration}</Text></div>
          <Divider style={{ margin: '0px 4px' }} />
          <Text type="secondary" style={{ fontSize: 11, }}>Created by: {item.createdBy}</Text>

          <div style={{ display: 'flex', alignItems: 'start', marginBottom: '5px', marginTop: '2px' }}>
          
            <Rate allowHalf defaultValue={item.ratingStarValue} style={{ fontSize: '15px' }} disabled={true} /><Text type="secondary" style={{ fontSize: 11, }}>&nbsp;({item.reviewCount} reviews)</Text>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: "10px" }}>
            <Button onClick={() => navigate('/courseDetails')}>Details</Button>
            <Button type='primary' onClick={() => navigate('/enrollPage')}>Enroll Now</Button>
          </div>
        </Space>
      </Card>
    </Badge.Ribbon>
</List.Item>
)}
/>
  );
}
export default CustomCourseCard;

/* 
Credits:
Card concept: https://i.ytimg.com/vi/bHNdC-uBVj4/maxresdefault.jpg */