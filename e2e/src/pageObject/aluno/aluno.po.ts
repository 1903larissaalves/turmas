import { browser, by, element } from 'protractor';

export class AlunoPage{

    acessarCadastrarAluno(){
        return browser.get('/stepper');
    }

    pegarInput(formControlName: any, valor: any){
        return element(by.css(`input[formControlName="${formControlName}"]`)).sendKeys(valor);
    }

    pegarBotao(){
        return element(by.buttonText('Próximo'));
    }

}