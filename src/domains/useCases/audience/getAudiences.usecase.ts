import { AudienceType } from "../../entities/audience.entity";
import { AudienceRepo } from "../../../repositories/interfaces/audience.repository-abs";

export function getAudiences(audienceRepository: AudienceRepo) {
    async function execute() {
        const getAudiences = audienceRepository.getAll;

        const result = await getAudiences();

        return result;
    }

    return {
        execute
    }
}