import { ProfessorService } from './professor.service';

describe("O servico ProfessorService", () => {
    it("deve ser instanciado", () => {
        const service = new ProfessorService();
        expect(service).toBeTruthy();
    });
});