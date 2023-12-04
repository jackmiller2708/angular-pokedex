import { HttpInterceptorFn } from '@angular/common/http';
import { HelperService } from '@services/application';
import { inject } from '@angular/core';

export const responseErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const { handleErrorResponse } = inject(HelperService).http;

  return next(req).pipe(handleErrorResponse());
};
