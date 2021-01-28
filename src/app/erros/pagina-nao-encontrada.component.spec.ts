import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component'

describe("PaginaNaoEncontradaComponent", () => {
    let paginaNaoEncontradaComponent: PaginaNaoEncontradaComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations:[
                PaginaNaoEncontradaComponent
            ],
            imports:[
                RouterTestingModule.withRoutes([])
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        const fixture = TestBed.createComponent(PaginaNaoEncontradaComponent);
        paginaNaoEncontradaComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve criar componente", () => {
        expect(paginaNaoEncontradaComponent).toBeTruthy();
    });
});