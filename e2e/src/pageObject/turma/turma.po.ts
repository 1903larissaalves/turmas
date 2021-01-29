import { $, browser, by, element, ElementFinder } from 'protractor'

export class TurmaPage{

    getAcessarCadastrarTurmas(){
        return browser.get('/stepper');
    }

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

    /*Professor*/

    getNomeProfessor(): ElementFinder{
        return $('#nomeProfessor input'); 
    }

    getTituloProfessor(): ElementFinder{
        return $('#tituloProfessor input'); 
    }   

    /*Aluno*/

    getNomeAluno(): ElementFinder{
        return $('#nomeAluno input')
    }

    getIngressoAluno(): ElementFinder{
        return $('#ingressoAluno input')
    }

    getVoltarButton(): ElementFinder{
        return $('#voltarBtn button')
    }

    getAdcionarAlunoButton(): ElementFinder{
        return $('#AdicionarAlunoBtn button')
    }

    getConcluirTurmaButton(): ElementFinder{
        return $('#conluirTurmaBtn button')
    }

}