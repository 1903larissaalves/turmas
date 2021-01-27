import { browser } from 'protractor'

export class CadastrarTurmaPage{

    acessarCadastrarTurmas(){
        return browser.get('/stepper');
    }

}