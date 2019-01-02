import { Action } from '@ngrx/store';
import { PokeApiNamedResource, PokeApiPageable } from './pokeapi';

export enum PokemonActionTypes {
  LoadPokemons = '[Pokemon] Load Pokemons',
  PokemonsLoaded = '[Pokemon] Pokemons loaded'
}

export class LoadPokemons implements Action {
  readonly type = PokemonActionTypes.LoadPokemons;

  constructor(public pageable: PokeApiPageable = { offset: 0, limit: 10 }) {}
}

export class PokemonsLoaded implements Action {
  readonly type = PokemonActionTypes.PokemonsLoaded;

  constructor(public pokemons: PokeApiNamedResource[], public count: number) {}
}

export type PokemonActions = LoadPokemons | PokemonsLoaded;
