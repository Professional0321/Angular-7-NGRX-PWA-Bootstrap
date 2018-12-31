import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeApiPokemonList, PokeApiPageable } from './pokeapi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  findAll(
    pageable: PokeApiPageable = { offset: 0, limit: 10 }
  ): Observable<PokeApiPokemonList> {
    const { offset = 0, limit = 10 } = pageable;
    return this.http.get<PokeApiPokemonList>(
      `/api/pokemon?offset=${offset}&limit=${limit}`
    );
  }
}
