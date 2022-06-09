import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesListsComponent } from './stories-lists.component';

describe('EstimatingStoriesListsComponent', () => {
  let component: StoriesListsComponent;
  let fixture: ComponentFixture<StoriesListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
