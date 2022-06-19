<<<<<<< HEAD
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
>>>>>>> e2ec02c0a79ebeb6e08eb25d6c6470b19a43d0e8

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

<<<<<<< HEAD
  beforeEach(waitForAsync(() => {
=======
  beforeEach(async(() => {
>>>>>>> e2ec02c0a79ebeb6e08eb25d6c6470b19a43d0e8
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
