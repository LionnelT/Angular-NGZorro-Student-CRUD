import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletestudentsComponent } from './deletestudents.component';

describe('DeletestudentsComponent', () => {
  let component: DeletestudentsComponent;
  let fixture: ComponentFixture<DeletestudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletestudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletestudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
