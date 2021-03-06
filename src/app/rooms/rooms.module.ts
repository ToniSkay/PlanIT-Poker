import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomItemComponent } from './components/room-item/room-item.component';
import {MatIconModule} from "@angular/material/icon";
import { RoomFormComponent } from './components/room-form/room-form.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import { RoomActionsComponent } from './components/room-actions/room-actions.component';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomItemComponent,
    RoomFormComponent,
    RoomActionsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
  ]
})
export class RoomsModule { }
