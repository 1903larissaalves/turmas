import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent{

    readonly menus: Array<PoMenuItem> =[
        {
            label: 'Início', action: this.onclick.bind(this, "inicio")
        },
        {
            label: 'Abertura turma', action: this.onclick.bind(this, "turma")
        }
    ]
    onclick(){
        alert("teste");
    }
}