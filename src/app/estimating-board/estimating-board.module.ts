import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimatingBoardComponent } from './estimating-board.component';
import { EstimatingCardsComponent } from './components/estimating-cards/estimating-cards.component';
import { EstimatingTeamComponent } from './components/estimating-team/estimating-team.component';
import { StoriesListsComponent } from './modules/stories-lists/stories-lists.component';
import { EstimatingCardComponent } from './components/estimating-card/estimating-card.component';
import {MatIconModule} from "@angular/material/icon";
import { EstimatingUserComponent } from './components/estimating-user/estimating-user.component';
import {StoriesListsModule} from "./modules/stories-lists/stories-lists.module";

@NgModule({
  declarations: [
    EstimatingBoardComponent,
    EstimatingCardsComponent,
    EstimatingTeamComponent,
    EstimatingCardComponent,
    EstimatingUserComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    StoriesListsModule,
  ]
})
export class EstimatingBoardModule { }
