import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RoomItem} from "../../interfaces/room-item";

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent {
  formGroup = new FormGroup({
    systemName: new FormControl(this.data?.systemName),
    name: new FormControl(this.data?.name),
  });

  constructor(
    public dialogRef: MatDialogRef<RoomFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: RoomItem
  ) {}

  get title(): string {
    return this.data ? 'Edit room' : 'Add room'
  }

  save() {
    console.log(this.formGroup.value)
  }

  close() {
    this.dialogRef.close();
  }
}
