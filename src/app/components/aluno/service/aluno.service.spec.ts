import { AlunoService } from './aluno.service';

describe("O servico AlunoService", () => {
    it("deve ser instanciado", () => {
        const service = new AlunoService();
        expect(service).toBeTruthy();
    });
});