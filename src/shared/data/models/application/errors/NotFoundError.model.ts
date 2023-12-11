import { IResponseError } from '@interfaces/application/errors/IResponseError.interface';
import { ErrorCode } from '@constants/enums';
import { Record } from 'immutable';

export class NotFoundError extends Record<IResponseError>({
  code: ErrorCode.NOT_FOUND,
  message: 'Not Found',
}) {}
