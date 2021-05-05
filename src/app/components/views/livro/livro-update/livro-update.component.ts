import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  livro: Livro = {
    id:  '',
    titulo:  '',
    nome_autor: '',
    texto: ''
  }

  id_cat: string = '';

  titulo = new FormControl('', [Validators.minLength(3)]);
  nome_autor = new FormControl('', [Validators.minLength(3)]);
  texto = new FormControl('', [Validators.minLength(10)]);

  constructor(private livroService: LivroService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.livro.id = this.route.snapshot.paramMap.get('id')!;
    this.finById();
  }

  finById(): void {
    this.livroService.findById(this.livro.id!).subscribe( data => this.livro = data);
  }

  update(): void{
    this.livroService.update(this.livro).subscribe( data => {
      this.voltarParaLivros();
      this.livroService.mensagem('Livro atualizado com sucesso!');
    }, err => {
      this.voltarParaLivros();
      this.livroService.mensagem('Erro ao atualizar o Livro, tente mais tarde...');
    })
  }

  voltarParaLivros(): void{
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

  getMessage(): any {
    if (!this.titulo.valid){
      return 'O campo TITULO deve ter entre 3 e 100 carateres';
    }
    if(!this.nome_autor.valid){
      return 'O campo NOME DO AUTOR deve ter entre 3 e 100 carateres';
    }
    if(!this.texto.valid){
      return 'O campo TEXTO deve ter entre 10 e 2000000 carateres';
    }
    return false;
  }


}
