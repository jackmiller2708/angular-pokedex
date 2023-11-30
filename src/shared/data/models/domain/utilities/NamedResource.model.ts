import { INamedResource } from '@interfaces/domain/utilities';
import { Record } from 'immutable';

export const NamedResource = Record<INamedResource>({ name: '' });
