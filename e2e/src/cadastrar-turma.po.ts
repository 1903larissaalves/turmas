import { browser, by, element } from 'protractor'

export class CadastrarTurmaPage{

    acessarCadastrarTurmas(){
        return browser.get('/stepper');
    }

    pegarInputNumero(){
        return element(by.css('input[formControlName="numero"]')).sendKeys('T-51');
    }

    pegarInputAno(){
        return element(by.css('input[formControlName="ano"]')).sendKeys('2020');
    }

    pegarInputPeriodoLetivo(){
        return element(by.css('input[formControlName="periodo"]')).sendKeys('2° Trimestre');
    }

    pegarInputVagas(){
        return element(by.css('input[formControlName="vagas"]')).sendKeys(2);
    }

    pegarBotaoProximo(){
        return element(by.buttonText('Próximo'));
    }



}