import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fazendeiro } from './model/fazendeiro.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable()
export class FazendeiroService{
constructor(private http: HttpClient){
    
}
cadastrarFazendeiro(fazendeiro : Fazendeiro): Observable<any>{
    let headers = new HttpHeaders({'Content-Type' : 'application/json'})
    let options = {headers}
    console.log(fazendeiro)
    return this.http.post(`http://localhost:8080/fazendeiros`,(fazendeiro), options).pipe(map((response : any)=> {
        return response
    }))
}
getFazendeiros() : Observable<any>{
return this.http.get(`http://localhost:8080/fazendeiros`).pipe(map((response:any)=>{
    console.log(response)
    return response
}))
}
}