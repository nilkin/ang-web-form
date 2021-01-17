import { Component, OnInit } from '@angular/core';
import { IRegion } from 'src/app/Shared/Models/Region';
import { ApiService } from 'src/app/Shared/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('',[ Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    surname: new FormControl('',[ Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    fathername: new FormControl('',[ Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    birthdate: new FormControl('', Validators.required),
    dateOfMartyrdomOrVeteran: new FormControl('', Validators.required),
    familyAddress: new FormControl('',[Validators.required, Validators.maxLength(250), Validators.minLength(2)]),
    contactInfo:  new FormControl('',[Validators.required, Validators.maxLength(250), Validators.minLength(1)]),
    fin: new FormControl('',[Validators.maxLength(7), Validators.minLength(7)]),
    rewardsName: new FormControl('',[Validators.required, Validators.maxLength(1000), Validators.minLength(1)]),
    rewardsDate: new FormControl('',Validators.required),
    childrenName: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    childrenSurname: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    childrenfin: new FormControl('',Validators.maxLength(7)),  
    childrenbirthday: new FormControl('',Validators.required),
    childrenphoto: new FormControl('',Validators.required),
    peopleCount: new FormControl('',Validators.required),
    totalArea: new FormControl('',Validators.required),
    roomCount: new FormControl('',Validators.required)

  })
  
  public towns: IRegion;
  constructor( private apiService: ApiService,private http: HttpClient) {
    this.getTowns();
   }  
   onSubmit(data){
     console.log(data)
    this.http.post(environment.apiUrl + '/api/Form',data)
             .subscribe((result)=>{
               console.warn("result", result);
             })
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
  get surname(){
    return this.form.get('surname')
  }
  get fathername(){
    return this.form.get('fathername')
  } 
  get birthdate(){
    return this.form.get('birthdate')
  }  
   get dateOfMartyrdomOrVeteran(){
    return this.form.get('dateOfMartyrdomOrVeteran')
  } 
 
  get familyAddress(){
    return this.form.get('familyAddress')
  }

  get contactInfo(){
    return this.form.get('contactInfo')
  }

  get fin(){
    return this.form.get('fin')
  }

  get rewardsName(){
    return this.form.get('rewardsName')
  }

  get rewardsDate(){
    return this.form.get('rewardsDate')
  }

  get childrenName(){
    return this.form.get('childrenName')
  }

  get childrenSurname(){
    return this.form.get('childrenSurname')
  }
  get childrenbirthday(){
    return this.form.get('childrenSurname')
  }
  get childrenfin(){
    return this.form.get('childrenfin')
  }
  get peopleCount(){
    return this.form.get('peopleCount')
  }

  get totalArea(){
    return this.form.get('totalArea')
  }

  get roomCount(){
    return this.form.get('roomCount')
  }
}
