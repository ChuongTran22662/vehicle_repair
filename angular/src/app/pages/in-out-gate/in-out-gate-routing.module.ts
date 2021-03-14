import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InOutGateComponent } from './in-out-gate.component';

const inOutGateRoutes: Routes = [
  {
    path: '',
    component: InOutGateComponent,
    children: [
      {
        path: 'in-out-gate',
        component: InOutGateComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(inOutGateRoutes)
  ],
  exports: [RouterModule]
})
export class InOutGateRoutingModule { }
