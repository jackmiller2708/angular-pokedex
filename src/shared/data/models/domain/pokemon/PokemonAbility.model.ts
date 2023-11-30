import { IPokemonAbility, PokemonAbility as TPokemonAbility } from '@interfaces/domain/pokemon';
import { IPokemonAbility as IPokemonAbilityDto } from '@interfaces/dtos/pokemon';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { NamedResource } from '../utilities';

const defaultValues: IPokemonAbility = {
  ability: NamedResource(),
  isHidden: false,
  slot: 0,
}

const adaptor = (values?: IPokemonAbilityDto): TPokemonAbility  => {
  const { ability, is_hidden, slot } = values ?? {};

  return PokemonAbility({
    ability: NamedResource(ability),
    isHidden: is_hidden,
    slot,
  });
};

export const PokemonAbility = AdaptableRecordFactory<IPokemonAbilityDto, IPokemonAbility>({
  name: 'PokemonAbility',
  defaultValues,
  adaptor,
});

