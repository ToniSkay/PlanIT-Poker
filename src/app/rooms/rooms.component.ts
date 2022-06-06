import { Component, OnInit } from '@angular/core';
import {RoomItem} from "./interfaces/room-item";
import {RoomFormComponent} from "./components/room-form/room-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  mockRooms: RoomItem[] = [
    {name: 'test1'},
    {name: 'test2'},
    {name: 'test3'},
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(RoomFormComponent, {
      width: '500px',
      height: '200px',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '400ms',
    });
  }
}
