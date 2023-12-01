import { Record } from 'immutable';
import { IType } from '@interfaces/domain';

export const Type = Record<IType>({
  name: '',
  color: '',
  iconFileName: '',
});
