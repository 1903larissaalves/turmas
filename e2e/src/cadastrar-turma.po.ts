import { browser, by, element } from 'protractor'

export class CadastrarTurmaPage{

    acessarCadastrarTurmas(){
        return browser.get('/stepper');
    }

    pegarBotaoProximo(){
        return element(by.buttonText('Próximo'));
    }

    pegarInput(formControlName: any, valor: any){
        return element(by.css(`input[formControlName="${formControlName}"]`)).sendKeys(valor);
    }

}