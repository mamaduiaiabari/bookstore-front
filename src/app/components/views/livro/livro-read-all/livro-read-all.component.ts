import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'livros','acoes'];
  id_cat: String = '';
  livros: Livro[] = [];

  constructor(private livroService: LivroService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.findAllByCategoria();
  }

  findAllByCategoria(): void{
    this.livroService.findAllByCategoria(this.id_cat).subscribe(data => this.livros = data);
  }

  navegarParaCriarLivro(): void{
    this.router.navigate([`categorias/${this.id_cat}/livros/create`]);
  }

}
