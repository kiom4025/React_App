import React from 'react';
import {
  ClockCircleTwoTone,
} from '@ant-design/icons';
import { Badge, Card, Rate, Button, Space, Typography, } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Text, Paragraph, Link } = Typography;


function CustomCourseCard() {
  const navigate = useNavigate();
  return (

    <Badge.Ribbon text="15% off" placement='end'>
      <Card
        style={{
          width: 250,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.20)',
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
          <Button type="primary" size='small'>Intermediate</Button>
          <Text strong>Data Structure and Algorithms</Text>
          <Paragraph
            ellipsis={
              {
                rows: 2,
                expandable: true,
                symbol: 'more'
              }
            }
            type='secondary'
            style={{ fontSize: 11, marginBottom:'3px'}}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Paragraph>

          <Text type="secondary" style={{ fontSize: 11,}}>Created by: Web Workflow</Text>

          <div style={{ display: 'flex', alignItems: 'start', marginBottom: '5px', marginTop:'2px'}}>
            <Rate allowHalf defaultValue={3.5} style={{ fontSize: '15px' }} disabled={true} /><Text type="secondary" style={{ fontSize: 11, }}>&nbsp;(611 ratings)</Text>
          </div>

          <div style={{marginTop:'5px'}}><ClockCircleTwoTone />&nbsp;<Link>Duration:&nbsp;</Link><Text>3hr 20min</Text></div>


          <Space direction='vertical'>

          </Space>

          {/* <div style={{ width: 110, paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#232323', borderRadius: 15, justifyContent: 'center', alignItems: 'center', gap: 15, display: 'inline-flex' }}>
            <div style={{ justifyContent: 'center', alignItems: 'flex-start', display: 'flex', gap: 2 }}>
              <div style={{ color: 'white', fontSize: 12, fontWeight: '400', wordWrap: 'break-word' }}>$</div>
              <div style={{ color: '#2BD638', fontSize: 12, fontWeight: '500', wordWrap: 'break-word' }}>350</div>
            </div>
            <div style={{ justifyContent: 'center', alignItems: 'flex-start', display: 'flex', gap: 2 }}>
              <div style={{ color: 'white', fontSize: 12, fontWeight: '400', textDecoration: 'line-through', wordWrap: 'break-word' }}>$</div>
              <div style={{ color: 'white', fontSize: 12, fontWeight: '400', textDecoration: 'line-through', wordWrap: 'break-word' }}>450</div>
            </div>
          </div> */}

          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: "10px" }}>
            <Button onClick={() => navigate('/courseDetails')}>Details</Button>
            <Button type='primary' onClick={() => navigate('/enrollPage')}>Enroll Now</Button>
          </div>
        </Space>
      </Card>
    </Badge.Ribbon>

  );
}
export default CustomCourseCard;

/* 
Credits:
Card concept: https://i.ytimg.com/vi/bHNdC-uBVj4/maxresdefault.jpg */