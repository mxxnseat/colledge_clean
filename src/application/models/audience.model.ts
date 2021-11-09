import { getModelForClass, Ref, modelOptions, prop } from "@typegoose/typegoose";
import { SpecializationModel } from "./specialiization.model";

@modelOptions({ schemaOptions: { collection: "Audience", versionKey: false } })
export class AudienceModel {
    @prop({ type: Number, required: true })
    public num!: number;

    @prop({ ref: "Specialization", required: true })
    public specialization!: Ref<SpecializationModel>;
}


export const audienceModel = getModelForClass(AudienceModel);