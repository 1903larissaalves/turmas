import { verificarAlunosSelecionados } from "./listar-alunos.component";

describe("A funcao VerificarAlunosSelecionados", () => {
    it("deve verificar se foram selecionados alunos para a turma",
     () =>{
        const alunos = 1;
        expect(verificarAlunosSelecionados(alunos)).toBeTruthy();
    });

    it("deve confirmar se nao foram selecionados alunos para a turma", () =>{
        const alunos = 0;
        expect(verificarAlunosSelecionados(alunos)).toBeFalsy();
    });
});
