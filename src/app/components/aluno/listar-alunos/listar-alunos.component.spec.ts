import { verificarAlunosSelecionados, verificarVagasTurma } from "./listar-alunos.component";

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

describe("A funcao verificarVagasTurma", () =>{
    it("deve confirmar se ha vagas na turma", () =>{
        const vagas = 1;
        const numeroAlunos = 1;
        expect(verificarVagasTurma(vagas, numeroAlunos)).toBeTruthy();
    });
    it("deve confirmar se nao ha vagas na turma", () =>{
        const vagas = 1;
        const numeroAlunos = 2;
        expect(verificarVagasTurma(vagas, numeroAlunos)).toBeFalsy();
    })
})
