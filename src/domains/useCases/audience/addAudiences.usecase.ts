import { AudienceType } from "domains/entities/audience.entity";
import { AudienceRepo } from "../../../repositories/interfaces/audience.repository-abs";

export function addAudiences(audienceRepository: AudienceRepo) {
    async function execute(...args: AudienceType) {
        const addAudiences = audienceRepository.add;

        const result = await addAudiences(...args);

        return result;
    }

    return {
        execute
    }
}