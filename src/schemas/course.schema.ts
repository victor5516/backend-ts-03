import { Document, Schema, model } from "mongoose";

export interface ICourseSchema extends Document {
    name: string;
    description: string;
    teacher: string;
    price: number;
    period: string;
}

const courseSchema = new Schema<ICourseSchema>({
    name: String,
    description: String,
    teacher: String,
    price: Number,
    period: String
});

const Course = model("Course", courseSchema);

export default Course;