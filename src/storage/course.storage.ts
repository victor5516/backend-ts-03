import { query } from "express";
import { ICourse } from "../models/course.model";
import Course ,{ ICourseSchema } from "../schemas/course.schema";

export const createCourseStorage = async (
  newCourse: ICourse
): Promise<ICourseSchema> => {
  const course = new Course(newCourse);
  await course.save();

  return course;
};

export const getCourseByIdStorage = async (id: string): Promise<ICourseSchema> => {
  const course = await Course.findById(id);
  return course;
};



export const getCoursesStorage = async (query: any): Promise<ICourseSchema[]> => {
  const courses = await Course.find(query);
  return courses;
}

export const updateCourseStorage = async (
  id: string,
  course: Partial<ICourseSchema>
): Promise<ICourseSchema> => {
  const updatedCourse = await Course.findByIdAndUpdate(id, course, { new: true });
  return updatedCourse;
};