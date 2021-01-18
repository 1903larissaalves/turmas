import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperComponent } from './stepper.component';
const stepperRoutes: Routes = [
    {
        path: '',
        component: StepperComponent
    }
];
@NgModule({
    imports:[
        RouterModule.forChild(stepperRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class StepperRouterModule{}