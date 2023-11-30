import { IVersionGameIndex, VersionGameIndex as TVersionGameIndex } from '@interfaces/domain/utilities';
import { IVersionGameIndex as IVersionGameIndexDto } from '@interfaces/dtos/utilities';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { NamedResource } from './NamedResource.model';

const defaultValues: IVersionGameIndex = {
  gameIndex: 0,
  version: NamedResource(),
};

const adaptor = (values?: IVersionGameIndexDto): TVersionGameIndex => {
  const { game_index, version } = values ?? {};

  return VersionGameIndex({
    gameIndex: game_index,
    version: NamedResource(version),
  });
};

export const VersionGameIndex = AdaptableRecordFactory<IVersionGameIndexDto, IVersionGameIndex>({
  name: 'VersionGameIndex',
  defaultValues,
  adaptor,
});
