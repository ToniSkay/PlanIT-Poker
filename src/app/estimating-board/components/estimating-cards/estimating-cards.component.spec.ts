import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatingCardsComponent } from './estimating-cards.component';

describe('EstimatingCardsComponent', () => {
  let component: EstimatingCardsComponent;
  let fixture: ComponentFixture<EstimatingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatingCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
