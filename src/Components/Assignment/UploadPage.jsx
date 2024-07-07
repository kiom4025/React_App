import { Button } from 'antd';
import {
  FileOutlined,
} from '@ant-design/icons';
import UploadComponent from './UploadComponent';
import { useNavigate } from 'react-router-dom';
const UploadPage = () => {
  const navigate = useNavigate();
    return (
      <div>
        <Button type='primary'><FileOutlined/> Assignment 1 : Resume website</Button>
        <div
          style={{
            backgroundColor:'white',
            width:'60%',
            // padding:'0.2%',
            paddingTop:'0.1%',
            paddingLeft:'2%',
            paddingBottom:'0.5%',
            marginTop:'1%',
            }}
        >
      <p><b>Description:</b> <br></br>
      <span style={{display:'inline-block', width: '20px'}}></span>
      Re-create your resume as a website using HTML and CSS</p>
        </div>
          <div 
          style={{
            margin:'5%',
          }}>
          <UploadComponent/>
          </div>
          <div
            style={{
              display:'flex',
              justifyContent:'center',
              margin:'2%',
            }}
          >
            <Button type='primary' onClick={()=>navigate('/assignments/upload/success')}>Submit</Button>
            <span style={{display:'inline-block', width: '3%'}}></span>
            <Button onClick={()=>navigate('/assignments')}>Cancel</Button>
          </div>
      </div>
    );
  };
  export default UploadPage;