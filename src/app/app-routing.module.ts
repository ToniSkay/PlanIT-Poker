import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutePath} from "./shared/enums/route-path";
import {LayoutComponent} from "./shared/layout/layout.component";
import {RoomsComponent} from "./rooms/rooms.component";

const routes: Routes = [
  {
    path: RoutePath.Root,
    pathMatch: 'full',
    redirectTo: RoutePath.Rooms,
  },
  {
    path: RoutePath.Root,
    component: LayoutComponent,
    children: [
      {
        path: RoutePath.Rooms,
        component: RoomsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
