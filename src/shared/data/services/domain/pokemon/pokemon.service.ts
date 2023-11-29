import { IResourceService } from '@interfaces/application/services';
import { ResourceList } from '@interfaces/application/utilities';
import { Injectable } from '@angular/core';
import { Pokemon } from '@interfaces/domain/pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonService implements IResourceService<Pokemon> {
  constructor() {}

  getResource(nameOrId: string): Pokemon {
    throw new Error('Method not implemented.');
  }

  getResourceList(): ResourceList<Pokemon> {
    throw new Error('Method not implemented.');
  }
}
