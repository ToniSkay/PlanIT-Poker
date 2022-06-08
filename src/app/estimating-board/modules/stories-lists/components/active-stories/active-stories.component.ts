import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-active-stories',
  templateUrl: './active-stories.component.html',
  styleUrls: ['./active-stories.component.scss']
})
export class ActiveStoriesComponent implements OnInit {
  activeStories = [
    {title: 'test1'},
    {title: 'test2'},
    {title: 'test3'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  isActive(story): boolean {
    return this.activeStories.indexOf(story) === 0;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.activeStories, event.previousIndex, event.currentIndex);
    console.log(this.activeStories)
  }
}
