import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RoutePath} from "../enums/route-path";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToRooms() {
    this.router.navigate([RoutePath.Rooms])
  }
}
