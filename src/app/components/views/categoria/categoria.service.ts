import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = environment.baseUrl;

  constructor(private httpCliente: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias`;
    return this.httpCliente.get<Categoria[]>(url);
  }

  findById(id: string): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias/${id}`;
    return this.httpCliente.get<Categoria>(url);
  }

  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias`;
    return this.httpCliente.post<Categoria>(url, categoria);
  }

  delete(id: string): Observable<void>{
    const url = `${this.baseUrl}/categorias/${id}`;
    return this.httpCliente.delete<void>(url);
  }

  update(categoria: Categoria): Observable<void>{
    const url = `${this.baseUrl}/categorias/${categoria.id}`;
    return this.httpCliente.put<void>(url, categoria);
  }

  mensagem(str: string): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000

    })
  }
}
