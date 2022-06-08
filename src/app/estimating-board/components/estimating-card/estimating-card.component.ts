import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-estimating-card',
  templateUrl: './estimating-card.component.html',
  styleUrls: ['./estimating-card.component.scss']
})
export class EstimatingCardComponent implements OnInit {
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
