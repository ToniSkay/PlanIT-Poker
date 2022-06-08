import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatingBoardComponent } from './estimating-board.component';

describe('EstimatingBoardComponent', () => {
  let component: EstimatingBoardComponent;
  let fixture: ComponentFixture<EstimatingBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatingBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
