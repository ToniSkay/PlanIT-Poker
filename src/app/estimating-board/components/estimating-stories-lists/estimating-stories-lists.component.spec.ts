import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatingStoriesListsComponent } from './estimating-stories-lists.component';

describe('EstimatingStoriesListsComponent', () => {
  let component: EstimatingStoriesListsComponent;
  let fixture: ComponentFixture<EstimatingStoriesListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatingStoriesListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatingStoriesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
