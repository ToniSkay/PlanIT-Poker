import { Component, OnInit } from '@angular/core';
import {RoomItem} from "./interfaces/room-item";

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

  constructor() { }

  ngOnInit(): void {
  }

}
