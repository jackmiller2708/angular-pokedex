import { HttpInterceptorFn } from '@angular/common/http';

export const responseErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
