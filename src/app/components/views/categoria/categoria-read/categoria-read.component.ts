import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros','acoes'];

  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.categoriaService.findAll().subscribe(data => {
      console.log(data);
      this.categorias = data;
    })
  }

  navegarParaCategoriaCreate(){
    this.router.navigate(['categorias/create']);
  }

}
