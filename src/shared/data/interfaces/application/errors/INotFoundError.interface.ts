import { IResponseError } from './IResponseError.interface';
import { ErrorCode } from '@constants';
import { RecordOf } from 'immutable';

export interface INotFoundError extends IResponseError {
  code: ErrorCode.NOT_FOUND;
}

export type NotFoundError = RecordOf<INotFoundError>;
