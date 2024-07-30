// src/services/api.js

import { courses } from './mockData';

export const getCourses = () => {
  return courses;
};

export const getCourseById = (id) => {
  return courses.find(course => course.id === id);
};
