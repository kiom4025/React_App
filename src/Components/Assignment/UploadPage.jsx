import { Button } from 'antd';
import {
  FileOutlined,
} from '@ant-design/icons';
import UploadComponent from './UploadComponent';
import { Link } from 'react-router-dom';
const UploadPage = () => {
    return (
      <div>
        <Button type='primary'><FileOutlined/> Assignment 1 : Stopwatch</Button>
        <div
          style={{
            backgroundColor:'white',
            width:'60%',
            // padding:'0.2%',
            paddingTop:'0.1%',
            paddingLeft:'2%',
            paddingBottom:'0.5%',
            marginTop:'1%'
            }}
        >
      <p><b>Description:</b> <br></br>
      <span style={{display:'inline-block', width: '20px'}}></span>
      Create a Stopwatch using HTML, CSS and Javascript</p>
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
            <Button type='primary'><Link to="/assignments/upload/success">Submit</Link></Button>
            <span style={{display:'inline-block', width: '3%'}}></span>
            <Button><Link to="/assignments">Cancel</Link></Button>
          </div>
      </div>
    );
  };
  export default UploadPage;