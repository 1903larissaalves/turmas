import { AlunoService } from './aluno.service';

describe("AlunoService", () => {

    it("deve ser instanciado", () => {
        const service = new AlunoService();
        expect(service).toBeTruthy();
    });
    
});