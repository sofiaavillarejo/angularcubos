import { Component, OnInit } from '@angular/core';
import { Compra } from '../../models/Compra';
import { ServiceLogin } from '../../services/Login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent implements OnInit{
  public compras!: Array<Compra>;

  constructor(private _service: ServiceLogin, private _router: Router){}

  ngOnInit(): void {
    this._service.getCompras().then(response => {
      this.compras = response;
    })
  }
}
