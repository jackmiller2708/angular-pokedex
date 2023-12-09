import { RecordOf } from 'immutable';

export interface IBreadcrumb {
  name: string;
  path: string;
}

export type Breadcrumb = RecordOf<IBreadcrumb>;
