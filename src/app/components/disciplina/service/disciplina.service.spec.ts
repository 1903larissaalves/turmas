import { DisciplinaService } from './disciplina.service';

describe("O servico DisciplinaService", () => {
    it("deve ser instanciado", () => {
        const service = new DisciplinaService();
        expect(service).toBeTruthy();
    });
});