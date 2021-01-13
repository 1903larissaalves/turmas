import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../Aluno.service';

@Component({
    templateUrl: 'listar-alunos.component.html'
})
export class ListarAlunosComponent implements OnInit{

    alunos: any[] = [];

    constructor(private alunoService: AlunoService,
                private router: Router){}

    ngOnInit(): void {
        this.alunos = this.alunoService.listarAlunos();
        console.log(this.alunoService);
    }

    cancelar(){
        this.router.navigateByUrl('listar-disciplinas');
    }

    finalizarTurma(){
        this.router.navigateByUrl('');
    }
    
}