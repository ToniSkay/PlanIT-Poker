import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimating-cards',
  templateUrl: './estimating-cards.component.html',
  styleUrls: ['./estimating-cards.component.scss']
})
export class EstimatingCardsComponent implements OnInit {
  cardContent = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '?']

  constructor() { }

  ngOnInit(): void {
  }

}
