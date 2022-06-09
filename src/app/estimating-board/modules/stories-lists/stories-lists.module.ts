import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoriesListsComponent} from "./stories-lists.component";
import {MatTabsModule} from "@angular/material/tabs";
import { ActiveStoriesComponent } from './components/active-stories/active-stories.component';
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [StoriesListsComponent, ActiveStoriesComponent],
  exports: [
    StoriesListsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    DragDropModule
  ]
})
export class StoriesListsModule { }
