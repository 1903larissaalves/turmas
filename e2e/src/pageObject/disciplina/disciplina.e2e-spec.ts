import { DisciplinaPage } from './disciplina.po';

describe('Testando tela de Disciplinas', () => {

    let disciplinaPage: DisciplinaPage;

    beforeEach(() => {
        disciplinaPage = new DisciplinaPage;
    });

    it("deve ir para cadastro disciplinas", () => {
        expect(disciplinaPage.acessarCadastrarDisciplinas());
    });

    it("deve cadastrar disciplina", () => {
        expect(disciplinaPage.pegarInput('nome', 'Algoritmos'));
        expect(disciplinaPage.pegarInput('professor', 'Jordana Castro'));
        expect(disciplinaPage.pegarInput('cargaHoraria', '40'));
        expect(disciplinaPage.pegarBotao().click());
    });

});