import React from 'react';
import {
  ClockCircleTwoTone,
} from '@ant-design/icons';
import { Badge, Card, Rate, Button, Space, Typography, Divider, List } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Text, Paragraph, Link } = Typography;

const data = [
  {
    title: 'Full Stack Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    difficultyLevel: 'Advanced',
    duration: '3 months',
    instructor: 'Mathiarasan',
    rating: 4,
    ratingNumbers: 611,
    offerPercent: 15,
  },
  {
    title: 'Data Structure and Algorithms',
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    difficultyLevel: 'Intermediate',
    duration: '15hr 20min',
    instructor: 'Mathiarasan',
    rating: 2.5,
    ratingNumbers: 81,
    offerPercent: 25,
  },
  {
    title: 'Python',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    difficultyLevel: 'Intermediate',
    duration: '1 month',
    instructor: 'Mathiarasan',
    rating: 3,
    ratingNumbers: 122,
    offerPercent: 10,
  },
  {
    title: 'Database',
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    difficultyLevel: 'Intermediate',
    duration: '22hr 12min',
    instructor: 'Mathiarasan',
    rating: 2.5,
    ratingNumbers: 52,
    offerPercent: 25,
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
    <Badge.Ribbon text={item.offerPercent + "% off"} placement='end'>
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
          <Button type="primary" size='small'>{item.difficultyLevel}</Button>
          <Text strong>{item.title}</Text>
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
            {item.description}
          </Paragraph>

          <div style={{ marginTop: '5px' }}><ClockCircleTwoTone />&nbsp;<Link>Duration:&nbsp;</Link><Text>{item.duration}</Text></div>

          <Text type="secondary" style={{ fontSize: 11, }}>Created by: {item.instructor}</Text>

          <div style={{ display: 'flex', alignItems: 'start', marginBottom: '5px', marginTop: '2px' }}>
          
            <Rate allowHalf defaultValue={item.rating} style={{ fontSize: '15px' }} disabled={true} /><Text type="secondary" style={{ fontSize: 11, }}>&nbsp;({item.ratingNumbers} reviews)</Text>
          </div>
          <Divider style={{ margin: '0px 4px' }} />
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