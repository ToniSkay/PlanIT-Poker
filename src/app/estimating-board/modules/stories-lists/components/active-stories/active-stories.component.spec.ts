import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStoriesComponent } from './active-stories.component';

describe('ActiveStoriesComponent', () => {
  let component: ActiveStoriesComponent;
  let fixture: ComponentFixture<ActiveStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
