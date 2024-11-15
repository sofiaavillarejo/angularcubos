import { Component, OnInit } from '@angular/core';
import { ServiceLogin } from '../../services/Login';
import { Router } from '@angular/router';
import { UsuarioData } from '../../models/UsuarioData';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  public perfil!: UsuarioData;

  constructor(private _service: ServiceLogin, private _router: Router){}

  ngOnInit(): void {
    this._service.getPerfil().then(response => {
      this.perfil = response;
    })
  }
}
