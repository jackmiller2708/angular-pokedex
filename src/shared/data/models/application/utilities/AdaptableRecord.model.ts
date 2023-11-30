import { IAdaptableRecordOptions, IAdaptableRecordFactory } from "@interfaces/application/utilities";
import { Record } from "immutable";

export function AdaptableRecordFactory<R, T extends object>(options: IAdaptableRecordOptions<R, T>): IAdaptableRecordFactory<R, T> {
  const { defaultValues, adaptor } = options;
  
  return Object.assign<Partial<IAdaptableRecordFactory<R, T>>, any>(
    Record<T>(defaultValues),
    { adaptor }
  ) as IAdaptableRecordFactory<R, T>;
}