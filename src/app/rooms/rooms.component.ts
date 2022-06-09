import { Component, OnInit } from '@angular/core';
import {RoomItem} from "./interfaces/room-item";
import {RoomFormComponent} from "./components/room-form/room-form.component";
import {MatDialog} from "@angular/material/dialog";
import {generateSystemName} from "../shared/utils/generate-system-name";
import {defaultModalConfig} from "../shared/constants/default-modal-config";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  mockRooms: RoomItem[] = [
    {name: 'test1', systemName: generateSystemName()},
    {name: 'test2', systemName: generateSystemName()},
    {name: 'test3', systemName: generateSystemName()},
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {}

  openDialog() {
    this.dialog.open(RoomFormComponent, defaultModalConfig);
  }
}
