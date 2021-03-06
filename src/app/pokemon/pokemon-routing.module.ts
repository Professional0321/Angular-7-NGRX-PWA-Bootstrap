import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListPageComponent } from './pokemon-list-page/pokemon-list-page.component';
import { LayoutModule } from '../layout/layout.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonModule } from './pokemon.module';
import { CommonModule } from '@angular/common';
import { PokemonFavoriteListPageComponent } from './pokemon-favorite-list-page/pokemon-favorite-list-page.component';
import { PokemonDetailPageComponent } from './pokemon-detail-page/pokemon-detail-page.component';

const routes: Routes = [
  { path: '', component: PokemonListPageComponent },
  { path: 'favorites', component: PokemonFavoriteListPageComponent },
  { path: 'pokemon/:name', component: PokemonDetailPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    NgbPaginationModule,
    PokemonModule
  ],
  exports: [RouterModule],
  declarations: [
    PokemonListPageComponent,
    PokemonFavoriteListPageComponent,
    PokemonDetailPageComponent
  ]
})
export class PokemonRoutingModule {}
