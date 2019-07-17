import { PhotoListResolver } from './photos/photo-list/photo-list-resolve';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  {path: 'user/:userName', component: PhotoListComponent, resolve: {photos:PhotoListResolver}},
  {path: 'p/add', component: PhotoFormComponent},
  {path: '**', component: NotFoundComponent} //Quando alguma rota entra incorreta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
