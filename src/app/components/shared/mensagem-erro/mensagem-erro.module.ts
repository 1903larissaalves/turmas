import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MensagemValidacaoComponent } from './mensagem-erro.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        MensagemValidacaoComponent
    ],
    declarations: [
        MensagemValidacaoComponent
    ]
})
export class MensagemErroModule{}