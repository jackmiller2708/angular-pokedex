import { IResponseError } from './IResponseError.interface';
import { ErrorCode } from '@constants';

export interface INotFoundError extends IResponseError {
  code: ErrorCode.NOT_FOUND;
}
