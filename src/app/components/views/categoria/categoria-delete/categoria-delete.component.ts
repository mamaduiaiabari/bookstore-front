import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(private categoriaService: CategoriaService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void{
    this.categoriaService.findById(this.categoria.id!).subscribe( data =>{
      this.categoria = data;
    })
  }

  delete(): void{
    this.categoriaService.delete(this.categoria.id!).subscribe(data =>{
      this.voltarParaCategorias();
      this.categoriaService.mensagem('Categoria eliminada com sucesso');
    }, err=>{
      this.categoriaService.mensagem(err.error.error);
    })
  }

  voltarParaCategorias(){
    this.router.navigate(['categorias']);
  }

}
