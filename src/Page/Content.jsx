import { Layout } from 'antd';
import { Route, Routes } from "react-router-dom";
import AssignmentTable from '../Components/Assignment/Assignment-Table';
import UploadPage from '../Components/Assignment/UploadPage';
import SubmissionSuccess from '../Components/Assignment/Submissionsuccess';
const { Content } = Layout;

const PageContent = () => {
  return (
    <Content
        style={{
          margin: '1%',
        }}>
      <Routes>  {/* Replaced Switch with Routes in React Router v6 */}
        <Route path="/" element={<>this is dashboard content</>} />
        <Route path="/dashboard" element={<>this is dashboard content</>} />
        <Route path="/courses" element={<>this is courses content</>} />
        <Route path="/assignments" element={<AssignmentTable/>} />
        <Route path="/assignments/upload" element={<UploadPage/>} />
        <Route path="/assignments/upload/success" element={<SubmissionSuccess/>} />
        <Route path="/notes" element={<>this is notes content</>} />
      </Routes>
    </Content>
  );
};
export default PageContent;