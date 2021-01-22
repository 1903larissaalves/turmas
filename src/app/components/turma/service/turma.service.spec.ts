import { TurmaService } from './turma.service';

describe("O servico TurmaService", () => {
    it("deve ser instanciado", () => {
        const service = new TurmaService();
        expect(service).toBeTruthy();
    });
});