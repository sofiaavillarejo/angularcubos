import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/Service.Cubos';
import { Router } from '@angular/router';
import { Cubo } from '../../models/Cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public cubos!: Array<Cubo>;

  constructor(private _service: ServiceCubos, private _router: Router){}

  ngOnInit(): void {
    this._service.getCubos().then(response => {
      this.cubos = response;
    })
  }
}
