import { Component, ElementRef, ViewChild } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { Router } from '@angular/router';
import { ServiceCubos } from '../../services/Service.Cubos';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css'
})
export class ComprarComponent {
  @ViewChild("selectCubos") selectCubos!: ElementRef;
  public cubos!: Array<Cubo>;

  constructor(private _service: ServiceCubos, private _router: Router){}

  ngOnInit(): void {
    this._service.getCubos().then(response => {
      this.cubos = response;
    })
  }

  comprar(): void{
    let cubo = this.selectCubos.nativeElement.value;
    console.log(cubo);
    this._service.comprarCubo(cubo).then(response => {
      console.log("Cubo comprado ", response);
      this._router.navigate(['/compras']);
    })
  }
}
