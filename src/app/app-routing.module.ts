import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../app/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('../app/pages/clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'page404',
    loadChildren: () => import('../app/pages/page404/page404.module').then( m => m.Page404PageModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'convert',
    loadChildren: () => import('./pages/convert/convert.module').then( m => m.ConvertPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
