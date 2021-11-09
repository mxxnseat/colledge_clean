import { SpecializationRepo } from "../../../repositories/interfaces/specialization.repository-abs";

export function getSpecializations(specializationRepository: SpecializationRepo) {
    async function execute(name: string) {
        const addSpecialization = await specializationRepository.add;

        const result = await addSpecialization(name);

        return result;
    }

    return {
        execute
    }
}