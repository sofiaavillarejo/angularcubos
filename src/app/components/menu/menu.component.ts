import { Component, DoCheck, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/Service.Cubos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit, DoCheck{
  public marcas!: [];
  public sesion!: boolean;

  constructor(private _service: ServiceCubos, private _router: Router){}
  
  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.sesion = false;
    } else {
      this.sesion = true;
    }
    this._service.getMarcas().then(response => {
      this.marcas = response;
    })
  }

  ngDoCheck(): void {
    if (localStorage.getItem('token') == null) {
      this.sesion = false;
    } else {
      this.sesion = true;
    }
  }

  cerrarSesion(): void {
    alert('Has cerrado sesión');
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
}
