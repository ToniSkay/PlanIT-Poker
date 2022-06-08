import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RoomsModule} from "./rooms/rooms.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {EstimatingBoardModule} from "./estimating-board/estimating-board.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,

    EstimatingBoardModule,
    SharedModule,
    RoomsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
