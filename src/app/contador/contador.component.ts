import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit 
{
  public contador = 0;
  //public imgUrl = 'http://fujideia.com.br/fuji/papw/grupo_handsome_siblings_20022020.png';
  //public outraImgUrl = 'http://sindiclubespa.com.br/wp-content/uploads/2017/10/img_how_to_play_dominoes_375_orig.jpg';
  //public imagemLocal = 'assets/maxresdefault.jpg';

  constructor() { }

  ngOnInit(): void{
  }

  public contarClique()
  {
    this.contador = this.contador + 1;
    //this.contador++;
  }

  public zerarContador()
  {
    this.contador = 0;
  }
}
