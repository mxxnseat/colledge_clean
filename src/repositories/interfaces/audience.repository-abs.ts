import { AudienceType } from "../../domains/entities/audience.entity";

export interface AudienceRepo {
    getAll(): any,
    add(...args: AudienceType): any
}