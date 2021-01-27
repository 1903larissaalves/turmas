import { CadastrarTurmaPage } from './cadastrar-turma.po'

describe("Testando tela cadastrar-turma", () => {

    let cadastrarTurmaPage: CadastrarTurmaPage;

    beforeEach(() => {
        cadastrarTurmaPage = new CadastrarTurmaPage();
    });

    it("deve ir para cadastrar turma", () => {
        cadastrarTurmaPage.acessarCadastrarTurmas()
    });
    
});