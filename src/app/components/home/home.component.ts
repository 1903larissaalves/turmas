import { Component, Input, OnInit } from '@angular/core';
import { TurmaService } from '../turma/service/turma.service';
@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit{

    turmas: any[] = [];

    constructor(private turmaService: TurmaService){}

    ngOnInit(): void {
        this.turmas = this.turmaService.listarTurmas();
    }
    
}