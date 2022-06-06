import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomItemComponent } from './components/room-item/room-item.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    RoomsComponent,
    RoomItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class RoomsModule { }
