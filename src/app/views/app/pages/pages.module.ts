import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';
import { LayoutContainerModule } from 'src/app/Shared/Container/layout-container/layout-container.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PagesComponent, FormComponent, SuccessComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutContainerModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
