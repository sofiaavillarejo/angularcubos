import { Component } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ServiceCubos } from '../../services/Service.Cubos';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cubos-marcas',
  templateUrl: './cubos-marcas.component.html',
  styleUrl: './cubos-marcas.component.css'
})
export class CubosMarcasComponent {
  public cubos!: Array<Cubo>;
  public marca!: string;
  constructor(private _service: ServiceCubos, private _router: Router, private _activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.marca = params["marca"];
      this._service.getCubosMarca(this.marca).then(result => {
        this.cubos = result;
      })
    })

  }
}
