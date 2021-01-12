import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
