import {Component, Input } from '@angular/core';
import {RoomItem} from "../../interfaces/room-item";
import {Router} from "@angular/router";
import {RoutePath} from "../../../shared/enums/route-path";

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent {
  @Input() room: RoomItem;

  constructor(private router: Router) {}

  openRoom() {
    this.router.navigate([RoutePath.EstimatingBoard, this.room.systemName])
  }
}
