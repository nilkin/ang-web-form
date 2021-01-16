import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PagesComponent } from './pages.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      //if you want you can redirect to localhost
      // { path: '', component: FormComponent },
      { path: '', redirectTo: 'form' },
      { path: 'form', component: FormComponent },
      { path: 'success', component: SuccessComponent }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
