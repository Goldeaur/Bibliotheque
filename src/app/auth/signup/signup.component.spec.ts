<<<<<<< HEAD
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
>>>>>>> e2ec02c0a79ebeb6e08eb25d6c6470b19a43d0e8

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

<<<<<<< HEAD
  beforeEach(waitForAsync(() => {
=======
  beforeEach(async(() => {
>>>>>>> e2ec02c0a79ebeb6e08eb25d6c6470b19a43d0e8
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
