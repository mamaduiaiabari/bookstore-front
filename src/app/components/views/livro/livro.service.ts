import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from './livro.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;

  constructor(private httpClient: HttpClient, private _snack: MatSnackBar) {

   }

   findAllByCategoria(id_cat: String): Observable<Livro[]>{
     const url = `${this.baseUrl}/livros?categoria=${id_cat}`;
     return this.httpClient.get<Livro[]>(url);
   }

   create(livro: Livro, id_cat: string): Observable<Livro>{
     const url = `${this.baseUrl}/livros?categoria=${id_cat}`;
     return this.httpClient.post<Livro>(url, livro);
   }

   findById(id: String): Observable<Livro> {
     const url = `${this.baseUrl}/livros/${id}`;
     return this.httpClient.get<Livro>(url);
   }

   update(livro: Livro): Observable<Livro> {
    const url = `${this.baseUrl}/livros/${livro.id}`;
    return this.httpClient.put<Livro>(url, livro);
   }

   mensagem(str: string): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000

    })
  }
}
