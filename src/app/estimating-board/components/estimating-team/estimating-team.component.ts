import { Component, OnInit } from '@angular/core';
import {EstimatingUser} from "../estimating-user/interfaces/estimating-user";

@Component({
  selector: 'app-estimating-team',
  templateUrl: './estimating-team.component.html',
  styleUrls: ['./estimating-team.component.scss']
})
export class EstimatingTeamComponent implements OnInit {
  mockUsers: EstimatingUser[] = [
    {name: 'Anton', isVoted: true},
    {name: 'Max', isVoted: false},
    {name: 'Andy', isVoted: true},
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
