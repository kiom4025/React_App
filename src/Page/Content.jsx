import { Layout } from 'antd';
import { Route, Routes } from "react-router-dom";
import AssignmentTable from '../Components/Assignment/Assignment-Table';
import UploadPage from '../Components/Assignment/UploadPage';
import SubmissionSuccess from '../Components/Assignment/Submissionsuccess';
import CustomCourseCard from '../Components/Courses/CourseCard';
import CourseDetails from '../Components/Courses/CourseDescription';
import ModifyPage from '../Components/Add-Modify/ModifyPage';
import CourseForm from '../Components/Add-Modify/CourseForm';
import AssignmentForm from '../Components/Add-Modify/AssignmentForm';


const { Content } = Layout;

const PageContent = () => {
  return (
    <Content
      style={{
        margin: '2%',
      }}>
      <Routes>  {/* Replaced Switch with Routes in React Router v6 */}
        <Route path="/" element={<>This is Dashboard</>} />
        <Route path="/courses" element={<CustomCourseCard />} />
        <Route path="/courseDetails" element={<CourseDetails />} />
        <Route path="/enrollPage" element={<>This is enroll page</>} />
        <Route path="/editContent/" element={<ModifyPage />}>
          <Route path="editAssignment" element={<AssignmentForm />} />
          <Route path="editCourses" element={<CourseForm/>} />
        </Route>
        <Route path="/assignments" element={<AssignmentTable />} />
        <Route path="/assignments/upload" element={<UploadPage />} />
        <Route path="/assignments/upload/success" element={<SubmissionSuccess />} />
      </Routes>
    </Content>
  );
};
export default PageContent;