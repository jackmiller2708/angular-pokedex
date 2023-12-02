import { IRegion, Region as TRegion } from '@interfaces/domain';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { IRegion as IRegionDto } from '@interfaces/dtos';
import { NamedResource } from '../utilities';
import { List } from 'immutable';

const defaultValues: IRegion = {
  id: 0,
  name: '',
  names: List(),
  locations: List(),
  pokedexes: List(),
  versionGroups: List(),
  mainGeneration: NamedResource(),
};

const adaptor = (values?: IRegionDto): TRegion => {
  const {
    names,
    locations,
    version_groups,
    main_generation,
    pokedexes,
    ...others
  } = values ?? {};

  return Region({
    ...others,
    locations: List(locations?.map(NamedResource)),
    versionGroups: List(version_groups?.map(NamedResource)),
    pokedexes: List(pokedexes?.map(NamedResource)),
    mainGeneration: NamedResource(main_generation),
  });
};

export const Region = AdaptableRecordFactory<IRegionDto, IRegion>({
  defaultValues,
  adaptor,
});
