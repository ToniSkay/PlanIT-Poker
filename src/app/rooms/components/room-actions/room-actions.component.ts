import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RoomFormComponent} from "../room-form/room-form.component";
import {defaultModalConfig} from "../../../shared/constants/default-modal-config";
import {RoomItem} from "../../interfaces/room-item";

@Component({
  selector: 'app-room-actions',
  templateUrl: './room-actions.component.html',
  styleUrls: ['./room-actions.component.scss']
})
export class RoomActionsComponent {
  @Input() room: RoomItem;

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(RoomFormComponent, {...defaultModalConfig, data: this.room});
  }
}
