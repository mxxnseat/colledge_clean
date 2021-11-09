import { StudentType } from "../../entities/student.entity";
import { StudentRepo } from "../../../repositories/interfaces/student.repository-abs";
import { SpecializationRepo } from "../../../repositories/interfaces/specialization.repository-abs";

export function addStudent(studentRepository: StudentRepo, specializationRepository: SpecializationRepo) {
    async function execute(name: string, specialization: string, audience?: string) {
        const addStudent = studentRepository.addStudent;
        const specializationDoc = await specializationRepository.getByName(specialization);

        if (!specializationDoc) {
            return "Specialization not found";
        }

        const user = await addStudent(name, specializationDoc._id, audience);

        return user;
    }

    return {
        execute
    }
}