import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeditorComponent } from './page/heroeditor/heroeditor.component';
import { HerolistComponent } from './page/herolist/herolist.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'herolist',
    component: HerolistComponent,
  },
  {
    path: 'heroeditor',
    component: HeroeditorComponent,
  },
  {
    path: 'heroeditor/:id',
    component: HeroeditorComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
