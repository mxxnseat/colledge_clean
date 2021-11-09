export class Specialization {
    constructor(public name: string) { }
}

export type SpecializationType = ConstructorParameters<typeof Specialization>