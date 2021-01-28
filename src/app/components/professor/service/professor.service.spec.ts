import { ProfessorService } from './professor.service';

describe("ProfessorService", () => {
    it("deve ser instanciado", () => {
        const service = new ProfessorService();
        expect(service).toBeTruthy();
    });
});