import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudosGratuitosComponent } from './conteudos-gratuitos.component';

describe('ConteudosGratuitosComponent', () => {
  let component: ConteudosGratuitosComponent;
  let fixture: ComponentFixture<ConteudosGratuitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudosGratuitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudosGratuitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
