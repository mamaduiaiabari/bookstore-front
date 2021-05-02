import { Router } from '@angular/router';
import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.categoriaService.create(this.categoria).subscribe( data =>{
      this.voltarParaCategoria();
      this.categoriaService.mensagem('Categoria criada com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++){
        this.categoriaService.mensagem(err.error.errors[i].message);
      }
    })
  }

  voltarParaCategoria(){
    this.router.navigate(['categorias']);
  }

}
