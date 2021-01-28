import { TurmaService } from './turma.service';

describe("TurmaService", () => {
    it("deve ser instanciado", () => {
        const service = new TurmaService();
        expect(service).toBeTruthy();
    });
});