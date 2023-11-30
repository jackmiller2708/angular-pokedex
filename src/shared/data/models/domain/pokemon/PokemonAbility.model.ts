import { IPokemonAbility as IPokemonAbilityDto } from '@interfaces/dtos/pokemon';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { IPokemonAbility } from '@interfaces/domain/pokemon';
import { NamedResource } from '../utilities';
import { RecordOf } from 'immutable';

const defaultValues: IPokemonAbility = {
  ability: NamedResource(),
  isHidden: false,
  slot: 0,
}

const adaptor = (value?: IPokemonAbilityDto): RecordOf<IPokemonAbility>  => {
  throw new Error('Function not implemented.');
};

export const PokemonAbility = AdaptableRecordFactory<IPokemonAbilityDto, IPokemonAbility>({
  name: 'PokemonAbility',
  defaultValues: defaultValues,
  adaptor,
});

