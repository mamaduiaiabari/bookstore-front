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

  constructor(private httpCleinte: HttpClient) { }

  findAll(): Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias`;
    return this.httpCleinte.get<Categoria[]>(url);
  }
}
