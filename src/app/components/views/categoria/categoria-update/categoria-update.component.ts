import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(private categoriaService: CategoriaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void{
    this.categoriaService.findById(this.categoria.id!).subscribe( data => this.categoria = data);
  }

  update(): void{
    this.categoriaService.update(this.categoria).subscribe(data => {
      this.voltarParaCategorias();
      this.categoriaService.mensagem('Categoria atualizada com sucesso');
    }, err => this.categoriaService.mensagem('Erro ao atualizar, verifique os campos!')
    );
  }

  voltarParaCategorias(): void{
    this.router.navigate(['categorias']);
  }

}
