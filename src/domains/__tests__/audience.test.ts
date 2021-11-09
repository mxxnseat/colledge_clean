import { AudienceRepo } from "../../repositories/interfaces/audience.repository-abs";
import { getAudiences } from "../useCases/audience/getAudiences.usecase";

const mockRepository: AudienceRepo = {
    getAll() {
        return [{
            id: "1",
            num: 24,
            specialization: "node js"
        },
        {
            id: "2",
            num: 27,
            specialization: "java"
        }]
    },
    add() {

    }
}


describe("audiences", () => {
    it("should return audiences", async () => {
        const getAll = getAudiences(mockRepository);

        const result = await getAll.execute();

        expect(result).toContainEqual({
            "id": "1",
            "num": 24,
            "specialization": "node js"
        });
    })
});