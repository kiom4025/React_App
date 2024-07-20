import React from 'react';
import {
  FileOutlined,
  InboxOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Input, message, Space, Upload, Mentions } from 'antd';
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
  title: "Assignment 1 : Resume website",
  description: "Build your resume as a website using HTML and CSS"
}

const UploadPage = () => {
  const navigate = useNavigate();
  function AssignmentSubmit() {
    var uploadCommentCheck = document.getElementById('UploadComments');
    if (uploadCommentCheck.textContent !== '' && uploadCommentCheck.textContent !== ' ') { // Can use regex for more control
      console.log(uploadCommentCheck.textContent)
      navigate('/assignments/upload/success');
    }
    else {
      uploadCommentCheck.className = uploadCommentCheck.className + " ant-input-status-error"
    }
  }
  return (
    <div>
      <Space
        direction="vertical"
        size="large"
        style={{
          display: 'flex',
        }}
      >
        <Space
          direction="vertical"
          size="small"
          style={{
            display: 'flex',
          }}
        >
          <Button type='primary'><FileOutlined /> {assignmentDetails.title} </Button>
          <Mentions
            style={{
              width: '100%',
            }}
            placeholder="this is readOnly Mentions"
            readOnly

            value={assignmentDetails.description}
          />
        </Space>
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: 'flex',
          }}
        >
          <Space
            direction="vertical"
            size="middle"
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
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
          </Space>

          <TextArea rows={4} placeholder="Comments" id='UploadComments' />
        </Space>


        <Flex justify='center'>
          <Button type='primary' onClick={AssignmentSubmit}>Submit</Button>
          <span style={{ display: 'inline-block', width: '3%' }}></span>
          <Button onClick={() => navigate('/assignments')}>Cancel</Button>
        </Flex>
      </Space>
    </div>
  );
};
export default UploadPage;