import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcoInputComponent } from './gco-input.component';

describe('GcoInputComponent', () => {
  let component: GcoInputComponent;
  let fixture: ComponentFixture<GcoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
