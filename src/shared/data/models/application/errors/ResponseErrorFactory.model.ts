import { IResponseError } from '@interfaces/application/errors';
import { NotFoundError } from './NotFoundError.model';
import { ErrorCode } from '@constants/enums';
import { RecordOf } from 'immutable';

export function responseErrorFactory(statusCode: ErrorCode): RecordOf<IResponseError> {
  const errorDict = {
    [ErrorCode.NOT_FOUND]: NotFoundError,
  };

  return new errorDict[statusCode]();
}
