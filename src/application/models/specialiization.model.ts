import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "Specialization", versionKey: false } })
export class SpecializationModel {
    @prop({ required: true, type: String })
    public name!: string
}

export const specializationModel = getModelForClass(SpecializationModel);