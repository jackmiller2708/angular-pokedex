import { IDescription, Description as TDescription } from '@interfaces/domain/utilities';
import { IDescription as IDescriptionDto } from '@interfaces/dtos';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { NamedResource } from './NamedResource.model';

const defaultValues: IDescription = {
  description: '',
  language: NamedResource(),
};

const adaptor = (values?: IDescriptionDto): TDescription => {
  const { description, language } = values ?? {};

  return Description({ description, language: NamedResource(language) });
};

export const Description = AdaptableRecordFactory<IDescriptionDto, IDescription>({
  defaultValues,
  adaptor
})
