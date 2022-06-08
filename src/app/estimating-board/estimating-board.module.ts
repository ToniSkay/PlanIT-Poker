import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimatingBoardComponent } from './estimating-board.component';
import { EstimatingCardsComponent } from './components/estimating-cards/estimating-cards.component';
import { EstimatingTeamComponent } from './components/estimating-team/estimating-team.component';
import { EstimatingStoriesListsComponent } from './components/estimating-stories-lists/estimating-stories-lists.component';
import { EstimatingCardComponent } from './components/estimating-card/estimating-card.component';
import {MatIconModule} from "@angular/material/icon";
import { EstimatingUserComponent } from './components/estimating-user/estimating-user.component';

@NgModule({
  declarations: [
    EstimatingBoardComponent,
    EstimatingCardsComponent,
    EstimatingTeamComponent,
    EstimatingStoriesListsComponent,
    EstimatingCardComponent,
    EstimatingUserComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class EstimatingBoardModule { }
