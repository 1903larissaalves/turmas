import { TurmaPage } from './turma.po'

describe("Testando tela cadastrar-turma", () => {

    let cadastrarTurmaPage: TurmaPage;

    beforeEach(() => {
        cadastrarTurmaPage = new TurmaPage();
    });

    it("deve ir para cadastrar turma", () => {
        cadastrarTurmaPage.getAcessarCadastrarTurmas()
    });

    it("deve cadastrar dados da turma", () => {
        expect(cadastrarTurmaPage.getNumeroTurmaInput().sendKeys('T-203'));
        expect(cadastrarTurmaPage.getAnoTurmaInput().sendKeys(2021));
        expect(cadastrarTurmaPage.getPeriodoTurmaInput().sendKeys('1° Trimestre'));
        expect(cadastrarTurmaPage.getVagasTurmaInput().sendKeys(2));
        expect(cadastrarTurmaPage.getVagasTurmaInput().sendKeys(2));
        expect(cadastrarTurmaPage.getProximoTurmaButton().click()); 
    });

    it("Deve cadastrar dados da nova disciplina e novo professor", () => {
        expect(cadastrarTurmaPage.getNomeDisciplina().sendKeys('Logica programacao'));
        expect(cadastrarTurmaPage.getProfessorDisciplina().sendKeys('David Junior'));
        expect(cadastrarTurmaPage.getCargaHorariaDisciplina().sendKeys(40));
        expect(cadastrarTurmaPage.getNomeProfessor().sendKeys('Ana Julia'));
        expect(cadastrarTurmaPage.getTituloProfessor().sendKeys('PHD'));
        expect(cadastrarTurmaPage.getAdiconarProfessorButton().click());
    });

    it("deve cadastrar dados de novo aluno", () => {
        expect(cadastrarTurmaPage.getNomeAluno().sendKeys('Laura'));
        expect(cadastrarTurmaPage.getIngressoAluno().sendKeys('Enade'));
        expect(cadastrarTurmaPage.getVoltarButton().click());
        expect(cadastrarTurmaPage.getAdcionarAlunoButton().click());
        expect(cadastrarTurmaPage.getConcluirTurmaButton().click());
    });

});