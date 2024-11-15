import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceLogin } from '../../services/Login';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("cajaemail") cajaemail!: ElementRef;
  @ViewChild("cajacont") cajacont!: ElementRef;

  constructor(private _router: Router, private _service: ServiceLogin){}

  login(): void {
    let nom = this.cajaemail.nativeElement.value;
    let cont = this.cajacont.nativeElement.value;

    let user = new Usuario(nom, cont);

    console.log(user);
    this._service.getToken(user).then(response => {
      const token = response;
      console.log(token);
      localStorage.setItem('token', token);
      this._router.navigate(['/perfil']);
    })
  }
}
