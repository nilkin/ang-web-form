import { Component, OnInit } from '@angular/core';
import { IRegion } from 'src/app/Shared/Models/Region';
import { ApiService } from 'src/app/Shared/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    form = new FormGroup({
    name: new FormControl('',Validators.required)
    
  })
  public towns: IRegion;
  constructor( private apiService: ApiService) {
    this.getTowns();
   }  

  ngOnInit(): void {
}


  getTowns(){
    this.apiService.getTowns().subscribe(
      data => {
        this.towns = data
      },
      // error => {
      // },
      // () => {
      // }
    )
  }
  get name(){
    return this.form.get('name')
  }

}
