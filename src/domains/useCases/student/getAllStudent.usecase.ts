import { StudentRepo } from "../../../repositories/interfaces/student.repository-abs";

export function getAllStudents(studentRepository: StudentRepo) {
    async function execute() {
        const students = await studentRepository.getAll();

        return students;
    }

    return {
        execute
    }
}