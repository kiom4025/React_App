import React from 'react';
import { 
  ClockCircleOutlined,
 } from '@ant-design/icons';
import { Badge, Card, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
function CustomCourseCard () {
  const navigate = useNavigate();
  return(
  <Badge.Ribbon text="15% off" placement='end'>
  <Card
    style={{
      width: 250,
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.20)',
      borderRadius:'12px',
    }}

  

    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    {/* <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Card title"
      description="This is the description"
    /> */}

<div style={{width: '100%', height: '100%', flexDirection: 'column', gap: 15, display: 'inline-flex'}}>
    <div style={{ flexDirection: 'column', gap: 4, display: 'inline-flex'}}>
        <div style={{width: 100, paddingLeft: 11, paddingRight: 11, paddingTop: 4, paddingBottom: 4, background: '#1677ff', borderRadius: 3, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 12, fontWeight: '450'}}>Intermediate</div>
        </div>
      <div>
        <div style={{width: '100%', color: '#0A0A0A', fontSize: 14, fontWeight: '500', wordWrap: 'break-word'}}>Data Structure and Algorithms</div>
        <div style={{color: '#979797', fontSize: 10, fontWeight: '400', }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      </div>
        <div style={{justifyContent: 'left', alignItems: 'flex-start', gap: 2, display: 'inline-flex', lineHeight:2}}>
            <div style={{color: '#EF116F', fontSize: 10.5,  fontWeight: '500', wordWrap: 'break-word'}}><ClockCircleOutlined />&nbsp;Duration:&nbsp;</div>
            <div style={{color: 'black', fontSize: 10.5, fontWeight: '400',  wordWrap: 'break-word'}}>3hr 20min</div>
        </div>
        <div style={{alignSelf: 'stretch', color: '#979797', fontSize: 10, fontWeight: '400', wordWrap: 'break-word', lineHeight:2}}>Created by: Web Workflow</div>

        <div style={{alignSelf: 'stretch', color: '#979797', fontSize: 10, fontWeight: '400', wordWrap: 'break-word', lineHeight:2}}>
        <Rate allowHalf defaultValue={3.5} style={{fontSize:'15px'}}/>&emsp;(611 ratings)</div>
        
        <div style={{width: 110, paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#232323', borderRadius: 15, justifyContent: 'center', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
            <div style={{justifyContent: 'center', alignItems: 'flex-start', display: 'flex', gap:2}}>
                <div style={{color: 'white', fontSize: 12, fontWeight: '400', wordWrap: 'break-word'}}>$</div>
                <div style={{color: '#2BD638', fontSize: 12, fontWeight: '500', wordWrap: 'break-word'}}>350</div>
            </div>
            <div style={{justifyContent: 'center', alignItems: 'flex-start', display: 'flex', gap:2}}>
                <div style={{color: 'white', fontSize: 12, fontWeight: '400', textDecoration: 'line-through', wordWrap: 'break-word'}}>$</div>
                <div style={{color: 'white', fontSize: 12, fontWeight: '400', textDecoration: 'line-through', wordWrap: 'break-word'}}>450</div>
            </div>
        </div>
    </div>
    <div style={{alignSelf: 'stretch', height: 26, paddingLeft: 70, paddingRight: 70, paddingTop: 7, paddingBottom: 7, background: '#FFE001', borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}
    onClick={()=>navigate('/courseDetails')}
    >
        <div style={{color: 'black', fontSize: 12, fontWeight: '400', }}>Enroll Now</div>
    </div>
</div>
  </Card>
  </Badge.Ribbon>
);
}
export default CustomCourseCard;

/* 
Credits:
Card concept: https://i.ytimg.com/vi/bHNdC-uBVj4/maxresdefault.jpg */