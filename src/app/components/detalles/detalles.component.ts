import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from '../../models/Cubo';
import { ServiceCubos } from '../../services/Service.Cubos';
import { Comentario } from '../../models/Comentario';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit{
  public cubo!: Cubo;
  public comentarios!: Array<Comentario>;
  constructor(private _activeRoute: ActivatedRoute, private _service: ServiceCubos){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params["id"]);
      this._service.findCubo(id).then(response => {
        this.cubo = response;
      })
      this._service.getComentarios(id).then(response => {
        this.comentarios = response;
      })
    })
  }
}
