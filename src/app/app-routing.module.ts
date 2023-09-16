import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JokesCardComponent} from "./Jokes/components/jokes-card/jokes-card.component";

const routes: Routes = [
  { path: 'jokes', component:JokesCardComponent },
  { path: '', redirectTo: '/jokes', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
