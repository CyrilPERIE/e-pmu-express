import { Course, sModelCourse } from "../models/Course";

export class CourseRepository {

    static async getSpecialite(id_course: string) {
        return await Course.findOne({
            where: {
                "id": id_course
            }
        })
        .then((results: sModelCourse & {specialite}) => results.specialite)
        .catch((err) => console.log(err));        
    }
}
