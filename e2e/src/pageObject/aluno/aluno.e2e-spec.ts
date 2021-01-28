import { AlunoPage } from './aluno.po';


describe("Testando cadastrar alunos", () => {

    let alunoPage: AlunoPage;

    beforeEach(() => {
        alunoPage = new AlunoPage;
    });

    it("deve ir para cadastrar aluno", () => {
        expect(alunoPage.acessarCadastrarAluno());
    });

    it("deve cadastrar novo aluno", () => {
        expect(alunoPage.pegarInput('nome', 'Julia Becker'));
        expect(alunoPage.pegarInput('ingresso', 'Enade'));
        expect(alunoPage.pegarBotao().click());
    });
    
});