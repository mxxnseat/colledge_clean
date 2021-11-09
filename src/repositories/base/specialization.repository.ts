import { Specialization } from "../../domains/entities/specialization.entity";
import { specializationModel } from "../../application/models/specialiization.model";
import { SpecializationRepo } from "../interfaces/specialization.repository-abs";

export class SpecializationRepository implements SpecializationRepo {
    async getByName(specializationName: string) {
        const specializationDoc = await specializationModel.findOne({ name: { $regex: specializationName, $options: "i" } });

        return specializationDoc;
    }
    async add(name: string) {
        const specialization = new Specialization(name);
        const specializationDoc = await specializationModel.create(specialization);

        return specializationDoc;
    }
}