import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSeguroIntuitivoComponent } from './carousel-seguro-intuitivo.component';

describe('CarouselSeguroIntuitivoComponent', () => {
  let component: CarouselSeguroIntuitivoComponent;
  let fixture: ComponentFixture<CarouselSeguroIntuitivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSeguroIntuitivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSeguroIntuitivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
