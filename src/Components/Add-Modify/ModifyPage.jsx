import ModifyNavigation from './ModifyNavigation';
import { Outlet } from 'react-router-dom';

const data = [
  {
    title: 'Full Stack Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    difficultyLevel: 'Advanced',
    duration: '3 months',
    instructor: 'Mathiarasan',
    rating: 4,
    ratingNumbers: 611,
    offerPercent: 15,
  },
  {
    title: 'Data Structure and Algorithms',
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    difficultyLevel: 'Intermediate',
    duration: '15hr 20min',
    instructor: 'Mathiarasan',
    rating: 2.5,
    ratingNumbers: 81,
    offerPercent: 25,
  },
  {
    title: 'Python',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    difficultyLevel: 'Intermediate',
    duration: '1 month',
    instructor: 'Mathiarasan',
    rating: 3,
    ratingNumbers: 122,
    offerPercent: 10,
  },
  {
    title: 'Database',
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    difficultyLevel: 'Intermediate',
    duration: '22hr 12min',
    instructor: 'Mathiarasan',
    rating: 2.5,
    ratingNumbers: 52,
    offerPercent: 25,
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