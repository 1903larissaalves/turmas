import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PoModule } from '@po-ui/ng-components';
import { TurmaModule } from '../turma/turma.module';
import { StepperComponent } from './stepper.component';

@NgModule({
    declarations:[
        StepperComponent
    ],
    imports:[
        BrowserModule,
        CommonModule,
        PoModule,
        TurmaModule
    ],
    exports:[
        StepperComponent
    ]
})
export class StepperModule{

}