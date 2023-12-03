type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };

export class EnumHelper {
  from<E extends Enum<E>>(collection: E) {
    return new EnumObj(collection);
  }
}

class EnumObj<E extends Enum<E>> {
  constructor(private readonly _enum: E) {}

  get(key: keyof E): E[keyof E] {
    return this._enum[key];
  }

  has(key: unknown): key is keyof E {
    return Object.hasOwn(this._enum, key as any);
  }
}
