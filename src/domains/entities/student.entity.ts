export type StudentName = string;


export class Student {
    constructor(
        public name: StudentName,
        public specialization: string,
        public audience?: string
    ) { }
}


export type StudentType = ConstructorParameters<typeof Student>
