import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Success.MessageComponent } from './success.message.component';

describe('Success.MessageComponent', () => {
  let component: Success.MessageComponent;
  let fixture: ComponentFixture<Success.MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Success.MessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Success.MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
