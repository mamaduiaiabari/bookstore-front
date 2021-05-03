import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;

  constructor(private httpClient: HttpClient) {

   }

   findAllByCategoria(id_cat: String): Observable<Livro[]>{
     const url = `${this.baseUrl}/livros?categoria=${id_cat}`;
     return this.httpClient.get<Livro[]>(url);
   }
}
