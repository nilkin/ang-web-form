import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRegion } from '../Models/Region';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  public getTowns():Observable <IRegion>{
  return this.http.get<IRegion>(environment.apiUrl + '/api/Form')
}

}

