import { NextFunction, Request, Response } from "express";

import { ErrorHandler } from "../handlers/error.handler";
import { ResponseHandler } from "../handlers/response.handler";
import { createCourseService, getCourseService, updateCourseService } from "../services/course.service";

export const createCourse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const body = req.body;
      const courseId = await createCourseService(body);
      if (!courseId) {
        throw new ErrorHandler(400, "No se pudo crear el curso");
      }
      next(
        new ResponseHandler(
          201,
          courseId,
          `Curso creado correctamente: ${courseId}`
        )
      );
    } catch (error) {
      next(error);
    }
  };
  export const getCourses = async (
    req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    try {
    const query = req.query;
      const users = await getCourseService(query);
      next(new ResponseHandler(200, users));
    } catch (error) {
      next(error);
    }
  };

  export const updateCourse = async (
    req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const course = await updateCourseService(id, body);

      if (!course) {
        throw new ErrorHandler(400, "Curso no encontrado ⚠");
      }

      next(
        new ResponseHandler(202, course, "Curso actualizado correctamente ✅")
      );
    } catch (error) {
      next(error);
    }
  };