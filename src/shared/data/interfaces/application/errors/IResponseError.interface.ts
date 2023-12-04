import { ErrorCode } from '@constants';

export interface IResponseError {
  code: ErrorCode;
  message: string;
}
