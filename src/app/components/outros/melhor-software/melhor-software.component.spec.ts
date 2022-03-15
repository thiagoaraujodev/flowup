import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhorSoftwareComponent } from './melhor-software.component';

describe('MelhorSoftwareComponent', () => {
  let component: MelhorSoftwareComponent;
  let fixture: ComponentFixture<MelhorSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelhorSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhorSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
