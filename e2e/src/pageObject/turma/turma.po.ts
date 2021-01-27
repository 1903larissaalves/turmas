import { browser, by, element } from 'protractor'

export class TurmaPage{

    acessarCadastrarTurmas(){
        return browser.get('/stepper');
    }

    pegarInput(formControlName: any, valor: any){
        return element(by.css(`input[formControlName="${formControlName}"]`)).sendKeys(valor);
    }

    pegarBotaoProximo(){
        return element(by.buttonText('Próximo'));
    }

}