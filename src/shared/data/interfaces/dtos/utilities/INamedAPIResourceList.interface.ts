import { INamedAPIResource } from '.';

export interface INamedAPIResourceList {
  count: number;
  next: string;
  previous: string;
  results: INamedAPIResource[];
}
