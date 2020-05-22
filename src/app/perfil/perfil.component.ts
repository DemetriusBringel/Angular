import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  public fotoPerfil = 'assets/img_avatar1.png';
  public usuario = 'Demétrius Bringel';
  public exibe = false;

  constructor() { }

  ngOnInit(): void {
  }

  public exibePerfil()
  {
    this.exibe=!this.exibe
  }

}
