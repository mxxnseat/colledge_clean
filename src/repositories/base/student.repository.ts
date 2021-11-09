import { Student, StudentName } from "../../domains/entities/student.entity";
import { StudentRepo } from "../interfaces/student.repository-abs";

import { studentModel } from "../../application/models/student.model";


export class StudentRepository implements StudentRepo {
    async addStudent(name: StudentName, specialization: UniqueId, audience?: string) {
        const student = new Student(name, specialization, audience);

        const studentDoc = studentModel.create(student);
        return studentDoc;
    }
    async getAll() {
        const studentDocs = await studentModel.find();

        return studentDocs;
    }
    async kickStudent(id: UniqueId) {
        const studentDoc = await studentModel.findByIdAndRemove(id);

        if (!studentDoc) {
            return `Student not found`;
        }

        return `Student ${studentDoc.name} is kicked`;
    }
}