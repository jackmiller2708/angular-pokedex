import { NamedResource } from './INamedResource.interface';
import { RecordOf } from 'immutable';

export interface IName {
  /**
   * The localized name for an API resource in a specific language.
   */
  name: string;

  /**
   * The language this name is in.
   */
  language: NamedResource;
}

export type Name = RecordOf<IName>;
