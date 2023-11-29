import { ResourceList, ResourceListQuery } from '@interfaces/application/utilities';
import { IResourceService } from '@interfaces/application/services';
import { Injectable } from '@angular/core';
import { Pokemon } from '@interfaces/domain/pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonService implements IResourceService<Pokemon> {
  constructor() {}
  
  getResource(nameOrId: string): Pokemon {
    throw new Error('Method not implemented.');
  }
  
  getResourceList(query?: ResourceListQuery): ResourceList<Pokemon> {
    throw new Error('Method not implemented.');
  }
}
