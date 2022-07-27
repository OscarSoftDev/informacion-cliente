import { Injectable } from '@angular/core';
import { clienteDto } from '../model/clienteDto';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url:string="http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getCliente(tipoDoc:string,numDoc:number): Observable<clienteDto> {
		return this.http.get<clienteDto>(this.url + `/informacion/${numDoc}/${tipoDoc}`);
	}

}
