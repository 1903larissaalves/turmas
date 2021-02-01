import { TurmaPage } from './turma.po'

describe("Testando cadatrar nova turma", () => {

    let cadastrarTurmaPage: TurmaPage;

    beforeEach(() => {
        cadastrarTurmaPage = new TurmaPage();
    });

    it("deve cadastrar nova turma", () => {

        cadastrarTurmaPage.getAcessarCadastrarTurmas()

        expect(cadastrarTurmaPage.getVoltarHomeButton().click()); 
        expect(cadastrarTurmaPage.getNumeroTurmaInput().sendKeys('T-203'));
        expect(cadastrarTurmaPage.getAnoTurmaInput().sendKeys(2021));
        expect(cadastrarTurmaPage.getPeriodoTurmaInput().sendKeys('1° Trimestre'));
        expect(cadastrarTurmaPage.getVagasTurmaInput().sendKeys(2));
        expect(cadastrarTurmaPage.getProximoTurmaButton().click()); 

        expect(cadastrarTurmaPage.getListaDisciplina(2).click());
        expect(cadastrarTurmaPage.getVoltarTurmaButton().click()); 
        expect(cadastrarTurmaPage.getAdicionarDisciplinaButton().click()); 
        expect(cadastrarTurmaPage.getProximoDisciplinasButton().click()); 

        expect(cadastrarTurmaPage.getNomeDisciplina().sendKeys('Logica programacao'));
        expect(cadastrarTurmaPage.getProfessorDisciplina().sendKeys('David Junior'));
        expect(cadastrarTurmaPage.getCargaHorariaDisciplina().sendKeys(40));
        expect(cadastrarTurmaPage.getButtonCadastrarModalFechar().click());
        expect(cadastrarTurmaPage.getButtonCadastrarModalConfirmar().click());        
        expect(cadastrarTurmaPage.getAdiconarProfessorButton().click());

        expect(cadastrarTurmaPage.getNomeProfessor().sendKeys('Ana Julia'));
        expect(cadastrarTurmaPage.getTituloProfessor().sendKeys('PHD'));
        expect(cadastrarTurmaPage.getButtonCadastrarModalFechar().click());
        expect(cadastrarTurmaPage.getButtonCadastrarModalConfirmar().click());
        
        expect(cadastrarTurmaPage.getListaAlunos(2).click());
        expect(cadastrarTurmaPage.getAdcionarAlunoButton().click());
        expect(cadastrarTurmaPage.getVoltarButton().click());
        expect(cadastrarTurmaPage.getConcluirTurmaButton().click());
        
        expect(cadastrarTurmaPage.getNomeAluno().sendKeys('Laura'));
        expect(cadastrarTurmaPage.getIngressoAluno().sendKeys('Enade'));
        expect(cadastrarTurmaPage.getButtonCadastrarModalFechar().click());
        expect(cadastrarTurmaPage.getButtonCadastrarModalConfirmar().click());
    });

});