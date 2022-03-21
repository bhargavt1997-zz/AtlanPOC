import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DabataseComponent } from './components/dabatase/dabatase.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  {
    path:'database',
    component:DabataseComponent
  },{
    path:'results',
    component:ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
