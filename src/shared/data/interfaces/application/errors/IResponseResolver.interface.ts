import { ResponseError } from './IResponseError.interface';

export type ErrorResponseResolverFn<T = never> = (error: ResponseError) => T;
