import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
forms:FormGroup
  constructor(
 private router: Router, private fb:FormBuilder,private _snackBar: MatSnackBar
    )

    {
this.forms=this.fb.group({
Usuario:['',Validators.required],
Contrasena:['',Validators.required]
})

   }

  ngOnInit(): void {
  }
ingresar(){

  const usurio=this.forms.value.Usuario
  const contra=this.forms.value.Contrasena
  console.log(usurio)
  console.log(contra)

  if(usurio== "admin"&& contra=="admin"){
this.router.navigate(['home'])

  }else{
    this.error();
    this.forms.reset();
  }

}
error(){
  this._snackBar.open('USUARIO O CONTRASEÑA INVALIDOS', 'OK', {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration:5000
  });


}
}
