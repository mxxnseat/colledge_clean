import { kickStudent } from "../../../domains/useCases/student/kickStudent.usecase";
import { Request, Response, NextFunction } from "express";
import { StudentRepository } from "../../../repositories/base/student.repository";

interface RequestBody {
    id: UniqueId
}

export async function studentKickController(req: Request<{}, {}, RequestBody>, res: Response, next: NextFunction) {
    const { id } = req.body;
    const studentRepository = new StudentRepository();
    const kickStudentCommand = kickStudent(studentRepository);

    const result = await kickStudentCommand.execute(id);

    res.status(200).json(result);
}