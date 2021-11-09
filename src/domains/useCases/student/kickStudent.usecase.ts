import { StudentRepo } from "../../../repositories/interfaces/student.repository-abs";

export function kickStudent(studentRepository: StudentRepo) {
    async function execute(id: UniqueId) {
        const kickStudent = studentRepository.kickStudent;

        const result = await kickStudent(id);
        return result;
    }

    return {
        execute
    }
}