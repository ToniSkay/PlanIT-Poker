import {Component, Input, OnInit} from '@angular/core';
import {EstimatingUser} from "./interfaces/estimating-user";

@Component({
  selector: 'app-estimating-user',
  templateUrl: './estimating-user.component.html',
  styleUrls: ['./estimating-user.component.scss']
})
export class EstimatingUserComponent implements OnInit {
  @Input() user: EstimatingUser;

  constructor() { }

  ngOnInit(): void {
  }

}
