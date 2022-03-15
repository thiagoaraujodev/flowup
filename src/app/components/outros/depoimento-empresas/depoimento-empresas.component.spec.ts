import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentoEmpresasComponent } from './depoimento-empresas.component';

describe('DepoimentoEmpresasComponent', () => {
  let component: DepoimentoEmpresasComponent;
  let fixture: ComponentFixture<DepoimentoEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepoimentoEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoimentoEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
