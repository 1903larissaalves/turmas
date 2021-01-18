import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mensagem-erro',
    templateUrl: 'mensagem-erro.component.html'
})
export class MensagemValidacaoComponent{

    @Input() texto = '';

}