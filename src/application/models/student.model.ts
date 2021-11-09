import { modelOptions, prop, Ref, getModelForClass } from "@typegoose/typegoose";

import { AudienceModel } from "./audience.model";
import { SpecializationModel } from "./specialiization.model";

@modelOptions({ schemaOptions: { collection: "Student", versionKey: false } })
export class StudentModel {
    @prop({ type: String, required: true })
    public name!: string;

    @prop({ ref: "Specialization", required: true })
    public specialization!: Ref<SpecializationModel>;

    @prop({ ref: "Audience" })
    public audience?: Ref<AudienceModel>;
}

export const studentModel = getModelForClass(StudentModel);