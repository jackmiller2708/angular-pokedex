import { AdaptableRecordFactory } from '@models/application/utilities';
import { IName, Name as TName } from '@interfaces/domain/utilities';
import { IName as INameDto } from '@interfaces/dtos/utilities';
import { NamedResource } from './NamedResource.model';

const defaultValues: IName = {
  language: NamedResource(),
  name: '',
};

const adaptor = (values?: INameDto): TName => {
  const { language, name } = values ?? {};

  return Name({ language: NamedResource(language), name });
};

export const Name = AdaptableRecordFactory<INameDto, IName>({
  defaultValues,
  adaptor,
});
