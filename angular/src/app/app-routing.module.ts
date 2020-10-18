import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import {MainComponent} from './core/main/main.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {GameComponent} from './core/game/game.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
      { path: '', component: MainComponent},
      { path: 'game/:id', component: GameComponent},
    ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
