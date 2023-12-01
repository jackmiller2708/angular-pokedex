type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };

export class EnumHelper {
  get<E extends Enum<E>>(collection: E, key: keyof E): E[keyof E] {
    return collection[key];
  }

  has<E extends Enum<E>>(collection: E, key: unknown): key is keyof E {
    return Object.hasOwn(collection, key as any);
  }
}
