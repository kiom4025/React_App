import React from 'react';
import {
  FileOutlined,
  InboxOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Button, Input, message, Upload } from 'antd';
const { TextArea } = Input;
const { Dragger } = Upload;

const Uploadprops = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

var assignmentDetails = {
  title:"Assignment 1 : Resume website",
  description:"Build your resume as a website using HTML and CSS"
}

const UploadPage = () => {
  const navigate = useNavigate();
  function AssignmentSubmit(){
    var uploadCommentCheck = document.getElementById('UploadComments');
    if(uploadCommentCheck.textContent!=='' && uploadCommentCheck.textContent!==' '){ // Can use regex for more control
      console.log(uploadCommentCheck.textContent)
      navigate('/assignments/upload/success');
    }
    else{
      uploadCommentCheck.className = uploadCommentCheck.className + " ant-input-status-error"
    }
  }
    return (
      <div>
        <Button type='primary' id='AssignmentTitleButton'><FileOutlined/> {assignmentDetails.title} </Button>
        <div id='AssignementDescription'><b>Description:</b> {assignmentDetails.description}</div>
          <div style={{margin:'3%'}}>
            
            <Dragger {...Uploadprops}> {/* Upload component - Start */}
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
              </p>
            </Dragger> {/* Upload component - End */}
            
            <br/><br/>
            <TextArea rows={4} placeholder="Comments" id='UploadComments'/>
          </div>
          <div
            style={{
              display:'flex',
              justifyContent:'center',
              margin:'2%',
            }}
          >
            <Button type='primary' onClick={AssignmentSubmit}>Submit</Button>
            <span style={{display:'inline-block', width: '3%'}}></span>
            <Button onClick={()=>navigate('/assignments')}>Cancel</Button>
          </div>
      </div>
    );
  };
  export default UploadPage;