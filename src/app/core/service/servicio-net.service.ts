import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/Usert';

@Injectable({
  providedIn: 'root'
})
export class ServicioNetService {

  private baseUrl = "https://localhost:7125/api/service/GetLista"

  constructor(    private http : HttpClient
    ) { }

  get(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`).pipe(
      map(data => {
        return data;
      })
    )
  }

}
