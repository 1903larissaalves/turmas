import { TurmaPage } from './turma.po'

describe("Testando tela cadastrar-turma", () => {

    let cadastrarTurmaPage: TurmaPage;

    beforeEach(() => {
        cadastrarTurmaPage = new TurmaPage();
    });

    it("deve ir para cadastrar turma", () => {
        cadastrarTurmaPage.acessarCadastrarTurmas()
    });

    it("deve cadastrar turma", () => {
        expect(cadastrarTurmaPage.pegarInput('numero', 'T-51'));
        expect(cadastrarTurmaPage.pegarInput('ano', '2020'));
        expect(cadastrarTurmaPage.pegarInput('periodo', '2° Trimestre'));
        expect(cadastrarTurmaPage.pegarInput('vagas', '2'));
        expect(cadastrarTurmaPage.pegarBotaoProximo().click());
    });

});