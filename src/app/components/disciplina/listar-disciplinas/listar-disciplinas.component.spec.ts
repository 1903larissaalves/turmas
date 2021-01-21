import { verificarPossuiDisciplinasSelecionadas } from './listar-disciplinas.component';

describe("A funcao verificarDisciplinasSelecionadas", ()=>{
    it("deve confirmar se ha disciplinas para cadastrar nova turma", () =>{
        const disciplinas = 1;
        expect(verificarPossuiDisciplinasSelecionadas(disciplinas)).toBeTruthy();
    });

    it("deve confirmar se nao ha disciplinas para cadastrar nova turma", () =>{
        const disciplinas = 0;
        expect(verificarPossuiDisciplinasSelecionadas(disciplinas)).toBeFalsy();
    });
});