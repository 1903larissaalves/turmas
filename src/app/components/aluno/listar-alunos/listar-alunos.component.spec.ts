import { verificarAlunosSelecionados } from "./listar-alunos.component";

describe("A funcao VerificarAlunosSelecionados", () => {
    it("deve verificar se foram selecionados alunos para a turma",
     () =>{
        const alunos = 1;
        expect(verificarAlunosSelecionados(alunos)).toBeTruthy();
    });
});