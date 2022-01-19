import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contoh1Component } from './contoh1/contoh1.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path : '', redirectTo:'/login', pathMatch:'full'},
  {path : '/login', component:ReactiveFormComponent},
  {path : '/contoh1',component:Contoh1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
