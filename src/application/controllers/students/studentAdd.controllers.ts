import { NextFunction, Response, Request } from "express";

import { addStudent } from "../../../domains/useCases/student/addStudent.usecase";

import { StudentRepository } from "../../../repositories/base/student.repository";
import { SpecializationRepository } from "../../../repositories/base/specialization.repository";

interface RequestBody {
    name: string,
    specialization: string,
    audience?: string
}

export async function studentAddController(req: Request<{}, {}, RequestBody>, res: Response, next: NextFunction) {
    const { name, specialization, audience } = req.body;
    const studentRepository = new StudentRepository();
    const specializationRepository = new SpecializationRepository();

    const addStudentCommand = addStudent(studentRepository, specializationRepository);

    const result = await addStudentCommand.execute(name, specialization, audience);

    res.status(200).json(result);
}