import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){}

  readonly menus: Array<PoMenuItem> = [
    { 
      label: 'Home', action: this.onClick.bind(this)
    },
    {
      label: 'Abertura turma', action: this.onClick.bind(this)
    }
  ];

  private onClick() {
    this.router.navigateByUrl('cadastrar-turma');
  }

}
