import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent {
  nameControl = new FormControl();

  constructor(public dialogRef: MatDialogRef<RoomFormComponent>) {}

  save() {
    console.log(this.nameControl.value)
  }

  close() {
    this.dialogRef.close();
  }
}
