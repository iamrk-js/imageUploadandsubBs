import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basic64Component } from './basic64.component';

describe('Basic64Component', () => {
  let component: Basic64Component;
  let fixture: ComponentFixture<Basic64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Basic64Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basic64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
