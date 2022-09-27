import { NgModule } from '@angular/core';
///importamos la rutas
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
//import { HomeModule } from './components/home/home.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  //{
  //  path:'homes',loadChildren:()=> import('./components/home/home.module').then(x=>HomeModule)

  //},
  {
    path: 'login',
    component: LoginComponent,
  },


  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NoEncontradoComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
