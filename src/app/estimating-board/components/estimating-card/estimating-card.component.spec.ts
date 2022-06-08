import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatingCardComponent } from './estimating-card.component';

describe('EstimatingCardComponent', () => {
  let component: EstimatingCardComponent;
  let fixture: ComponentFixture<EstimatingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
