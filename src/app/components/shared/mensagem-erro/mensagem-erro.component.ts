import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mensagem-erro',
    templateUrl: 'mensagem-erro.component.html',
    styleUrls: ['mensagem-erro.component.css']
})
export class MensagemValidacaoComponent{

    @Input() texto: string = '';

}