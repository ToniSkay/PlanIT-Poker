import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatingTeamComponent } from './estimating-team.component';

describe('EstimatingTeamComponent', () => {
  let component: EstimatingTeamComponent;
  let fixture: ComponentFixture<EstimatingTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatingTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
