import { getAllStudents } from "../../../domains/useCases/student/getAllStudent.usecase";
import { NextFunction, Response, Request } from "express";

import { StudentRepository } from "../../../repositories/base/student.repository";


export async function studentGetAllController(req: Request<{}, {}, {}>, res: Response, next: NextFunction) {
    const studentRepository = new StudentRepository();
    const getAllStudentCommand = getAllStudents(studentRepository);

    const result = await getAllStudentCommand.execute();

    res.status(200).json(result);
}