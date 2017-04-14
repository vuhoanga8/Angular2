import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private apiUrl = "http://58eda852cbaba41200a9cf69.mockapi.io/api/empoyee/";

    constructor(private _http: Http) {

    }
    GetList(): Observable<any[]>{
        return this._http.get(this.apiUrl).map((response:Response)=>response.json())
    }
    GetSingle(id: number): Observable<any>{
        return this._http.get(this.apiUrl + id).map((response:Response)=>response.json())
    }
   
}