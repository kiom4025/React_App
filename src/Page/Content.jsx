import { Layout } from 'antd';
import { Route, Routes } from "react-router-dom";
import AssignmentTable from '../Components/Assignment/Assignment-Table';
import UploadPage from '../Components/Assignment/UploadPage';
import SubmissionSuccess from '../Components/Assignment/Submissionsuccess';
import CustomCourseCard from '../Components/Courses/CourseCard';
import CourseDetails from '../Components/Courses/CourseDescription';

const { Content } = Layout;

const PageContent = () => {
  return (
    <Content
        style={{
          margin: '2%',
        }}>
        {/* Note: changing the element of 'Path="/"' from this is dashboard content -to- this is courses content for focus on Front-end assignement completion and making the course page as the defauld landing page*/}
      <Routes>  {/* Replaced Switch with Routes in React Router v6 */}
        <Route path="/" element={<CustomCourseCard/>} />
        <Route path="/courseDetails" element={<CourseDetails/>} />
        <Route path="/enrollPage" element= {<>This is enroll page</>} />
        {/* <Route path="/dashboard" element={<>this is dashboard content</>} /> */}
        {/* <Route path="/courses" element={<>this is courses content</>} /> */}
        <Route path="/assignments" element={<AssignmentTable/>} />
        <Route path="/assignments/upload" element={<UploadPage/>} />
        <Route path="/assignments/upload/success" element={<SubmissionSuccess/>} />
        {/* <Route path="/notes" element={<>this is notes content</>} /> */}
      </Routes>
    </Content>  
  );
};
export default PageContent;