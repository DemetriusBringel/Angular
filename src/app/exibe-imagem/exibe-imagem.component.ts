import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibe-imagem',
  templateUrl: './exibe-imagem.component.html',
  styleUrls: ['./exibe-imagem.component.css']
})
export class ExibeImagemComponent implements OnInit {

  public imgUrl = 'assets/img_avatar1.png';
  public exibe = false;

  constructor() { }

  ngOnInit(): void {
  }

  public exibeImagem()
  {
    this.exibe = !this.exibe;
  }

}
