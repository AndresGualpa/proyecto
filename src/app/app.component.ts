import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { usurio } from './model/usuario';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  datatable:any=[];
constructor(private UsuarioService:UsuarioService){

}
ngOnInit(): void{

}
ondatatable(){
this.UsuarioService.getUsuario().subscribe(

  res=>{
    this.datatable=res;
    console.log("hola http")
    console.log(res);
  }
);

}


}
