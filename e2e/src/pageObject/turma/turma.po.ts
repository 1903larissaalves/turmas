import { $, $$, browser, ElementFinder } from 'protractor'
export class TurmaPage{

    getAcessarCadastrarTurmas(){
        return browser.get('/stepper');
    }

    /*Informacoes turma*/

    getNumeroTurmaInput(): ElementFinder{
        return $('#numeroTurma input');
    }

    getAnoTurmaInput(): ElementFinder{
        return $('#anoTurma input');
    }

    getPeriodoTurmaInput(): ElementFinder{
        return $('#periodoTurma input');
    }

    getVagasTurmaInput(): ElementFinder{
        return $('#vagasTurmas input');
    }

    getVoltarHomeButton(): ElementFinder{
        return $('#cancelarTurmaBtn button');
    }

    getProximoTurmaButton(): ElementFinder{
        return $('#ProximoTurmaBtn button');
    }

    /*Disciplina*/

    getNomeDisciplina(): ElementFinder{
       return $('#nomeDisciplina input'); 
    }
    
    getProfessorDisciplina(): ElementFinder{
        return $('#ProfessorDisciplina input'); 
    }
    
    getCargaHorariaDisciplina(): ElementFinder{
        return $('#cargaHorariaDisciplina input'); 
    }

    getAdiconarProfessorButton(): ElementFinder{
        return $('#adicionarProfessorDisciplinaBtn button'); 
    }

    getListaDisciplina(posicao: number): ElementFinder{
        return $$('.po-checkbox-label.po-clickable').get(posicao);
    }

    getVoltarTurmaButton(): ElementFinder{
        return $('#voltarTurmaBtn button');
    }

    getAdicionarDisciplinaButton(): ElementFinder{
        return $('#AdicionarDisciplinasBtn button');
    }

    getProximoDisciplinasButton(): ElementFinder{
        return $('#ProximoDisciplinasBtn button');
    }

    /*Professor*/

    getNomeProfessor(): ElementFinder{
        return $('#nomeProfessor input'); 
    }

    getTituloProfessor(): ElementFinder{
        return $('#tituloProfessor input'); 
    }   

    getButtonCadastrarModalConfirmar(): ElementFinder{
        return $$('.po-button-label.po-text-ellipsis.po-button-primary').get(0);
    }

    getButtonCadastrarModalFechar(): ElementFinder{
        return $$('.po-button-label.po-text-ellipsis.po-button-secundary').get(0);
    }


    /*Aluno*/

    getNomeAluno(): ElementFinder{
        return $('#nomeAluno input')
    }

    getIngressoAluno(): ElementFinder{
        return $('#ingressoAluno input')
    }

    getAdcionarAlunoButton(): ElementFinder{
        return $('#AdicionarAlunoBtn button')
    }

    getListaAlunos(posicao: number): ElementFinder{
        return $$('.po-checkbox-label.po-clickable').get(posicao);
    }

    getVoltarButton(): ElementFinder{
        return $('#voltarBtn button')
    }

    getConcluirTurmaButton(): ElementFinder{
        return $('#conluirTurmaBtn button')
    }

}