import { DisciplinaPage } from './disciplina.po';

describe('Testando tela de Disciplinas', () => {

    let disciplinaPage: DisciplinaPage;

    beforeEach(() => {
        disciplinaPage = new DisciplinaPage;
    });

    it("deve ir para cadastro disciplinas", () => {
        expect(disciplinaPage.acessarCadastrarDisciplinas());
    });

    it("deve cadastrar nova disciplina", () => {
        expect(disciplinaPage.pegarInput('nome', 'Algoritmos'));
        expect(disciplinaPage.pegarInput('professor', 'Jordana Castro'));
        expect(disciplinaPage.pegarInput('cargaHoraria', '40'));
        expect(disciplinaPage.pegarBotao().click());
    });

    it("deve cadastrar novo professor", () => {
        expect(disciplinaPage.pegarInput('nome', 'Alan Jose Silva'));
        expect(disciplinaPage.pegarInput('titulo', 'PHD'));
        expect(disciplinaPage.pegarBotao().click());
    });

});