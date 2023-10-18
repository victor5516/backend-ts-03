import { ICourse } from "../models/course.model";
import { createCourseStorage, getCoursesStorage, updateCourseStorage } from "../storage/course.storage";



export const createCourseService = async (newCourse: ICourse): Promise<string> => {
    const course = await createCourseStorage(newCourse);
    return course._id;
}

export const  getCourseService = async ( query: any): Promise<ICourse[]> => {
    const {id, name, description, teacher, price, period} = query;
    const filter = {};
    if(id) filter["_id"] = id;
    if(name) filter["name"] = name;
    if(description) filter["description"] = description;
    if(teacher) filter["teacher"] = teacher;
    if(price) filter["price"] = price;
    if(period) filter["period"] = period;

    const courses = await getCoursesStorage(filter) as ICourse[];
    return courses;
}

export const updateCourseService = async (
  id: string,
  course: Partial<ICourse>
): Promise<ICourse | null> => {
  const updatedCourse = await updateCourseStorage(id, course) as ICourse;
  if (!updatedCourse) return null;

  return updatedCourse;
};