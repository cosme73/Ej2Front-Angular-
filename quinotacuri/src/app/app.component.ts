import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quinotacuri';
  role:string="";
  username:string="";


  constructor(private loginService: LoginService) {
  }

  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.role=this.loginService.showRole();
    this.username=this.loginService.showUsername();

    return this.loginService.verificar();
  }
  validarRol(){
    if(this.role=='ADMINISTRADOR' || this.role=='USUARIO'){
      return true;
    }else{
      return false;
    }
  }


  selectedColor: string = 'primary';

  cambiarColor(color: string) {
    this.selectedColor = color;
  }




}
