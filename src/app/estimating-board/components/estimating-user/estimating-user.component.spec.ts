import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatingUserComponent } from './estimating-user.component';

describe('EstimatingUserComponent', () => {
  let component: EstimatingUserComponent;
  let fixture: ComponentFixture<EstimatingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatingUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
