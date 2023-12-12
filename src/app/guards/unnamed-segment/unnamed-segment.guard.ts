import { CanMatchFn } from '@angular/router';

export const unnamedSegmentGuard: CanMatchFn = (_, segments) => {
  const [{ path }, ...others] = segments;

  return path === '-' && others.length > 0;
};
