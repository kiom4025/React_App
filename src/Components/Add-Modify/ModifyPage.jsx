import ModifyNavigation from './ModifyNavigation';
import { Outlet } from 'react-router-dom';

const data = [
  {
    courseTitle: 'Full Stack Development',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    difficulty: 'Advanced',
    courseDuration: '3 months',
    createdBy: 'Mathiarasan',
    ratingStarValue: 4,
    reviewCount: 611,
    discountPercentage: 15,
  },
  {
    courseTitle: 'Data Structure and Algorithms',
    shortDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    difficulty: 'Intermediate',
    courseDuration: '15hr 20min',
    createdBy: 'Mathiarasan',
    ratingStarValue: 2.5,
    reviewCount: 81,
    discountPercentage: 25,
  },
  {
    courseTitle: 'Python',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    difficulty: 'Intermediate',
    courseDuration: '1 month',
    createdBy: 'Mathiarasan',
    ratingStarValue: 3,
    reviewCount: 122,
    discountPercentage: 10,
  },
  {
    courseTitle: 'Database',
    shortDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    difficulty: 'Intermediate',
    courseDuration: '22hr 12min',
    createdBy: 'Mathiarasan',
    ratingStarValue: 2.5,
    reviewCount: 52,
    discountPercentage: 25,
  },
  
];

const ModifyPage = () => {
  return (
      <>
      <ModifyNavigation />
      <Outlet context={data}/>
      </>
  );
};
export default ModifyPage;


/* 
Credits:
Nested routes: https://hackernoon.com/mastering-nested-routes-for-robust-web-applications-using-react-router-v6
*/