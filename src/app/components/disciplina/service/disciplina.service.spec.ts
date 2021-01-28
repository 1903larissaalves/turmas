import { DisciplinaService } from './disciplina.service';

describe("DisciplinaService", () => {
    it("deve ser instanciado", () => {
        const service = new DisciplinaService();
        expect(service).toBeTruthy();
    });
});