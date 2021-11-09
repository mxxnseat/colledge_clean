export interface SpecializationRepo {
    getByName(specializationName: string): any,
    add(name: string): any
}