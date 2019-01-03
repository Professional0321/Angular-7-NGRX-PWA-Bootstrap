import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListPageComponent } from './pokemon-list-page/pokemon-list-page.component';
import { LayoutModule } from '../layout/layout.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonModule } from './pokemon.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: PokemonListPageComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    NgbPaginationModule,
    PokemonModule
  ],
  exports: [RouterModule],
  declarations: [PokemonListPageComponent]
})
export class PokemonRoutingModule {}