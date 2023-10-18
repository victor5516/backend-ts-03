import { Router } from "express";

import { createCourse, getCourses, updateCourse } from "../../controller/course.controller";



const router = Router();


router.post("/courses", createCourse);
router.get("/courses", getCourses);
router.put("/courses/:id", updateCourse);
export default router;