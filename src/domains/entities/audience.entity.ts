export type AudienceNum = number;

export class Audience {
    constructor(public num: AudienceNum, public specialization: string) { }
}

export type AudienceType = ConstructorParameters<typeof Audience>