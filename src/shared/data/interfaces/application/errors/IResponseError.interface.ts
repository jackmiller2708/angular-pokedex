import { ErrorCode } from '@constants';
import { RecordOf } from 'immutable';

export interface IResponseError {
  code: ErrorCode;
  message: string;
}

export type ResponseError = RecordOf<IResponseError>;
