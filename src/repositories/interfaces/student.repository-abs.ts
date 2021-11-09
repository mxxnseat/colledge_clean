import { StudentType } from "../../domains/entities/student.entity";

export interface StudentRepo {
    addStudent(...args: StudentType): any,
    kickStudent(id: UniqueId): any,
    getAll(): any
}
