import { AudienceRepo } from "../interfaces/audience.repository-abs";

import { audienceModel } from "../../application/models/audience.model";
import { Audience, AudienceType } from "../../domains/entities/audience.entity";


export class AudienceRepository implements AudienceRepo {
    async getAll() {
        const audiencesDocs = await audienceModel.find({});

        return audiencesDocs;
    }
    async add(...args: AudienceType) {
        const audience = new Audience(...args);

        const audienceDoc = await audienceModel.create(audience);

        return audienceDoc;
    }
}