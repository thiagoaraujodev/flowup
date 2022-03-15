import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComeceAgoraUsarComponent } from './comece-agora-usar.component';

describe('ComeceAgoraUsarComponent', () => {
  let component: ComeceAgoraUsarComponent;
  let fixture: ComponentFixture<ComeceAgoraUsarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComeceAgoraUsarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComeceAgoraUsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
