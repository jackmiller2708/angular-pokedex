import { ErrorCode } from '@constants/enums';
import { RecordOf } from 'immutable';

export interface IResponseError {
  code: ErrorCode;
  message: string;
}

export type ResponseError = RecordOf<IResponseError>;
