import { IResponseError } from './IResponseError.interface';
import { ErrorCode } from '@constants/enums';

export interface INotFoundError extends IResponseError {
  code: ErrorCode.NOT_FOUND;
}
