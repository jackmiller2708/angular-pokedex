import { PokeIdPipe } from './poke-id.pipe';

describe('PokeIdPipe', () => {
  const pipe = new PokeIdPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform 1 to #0001', () => {
    expect(pipe.transform(1)).toBe('#0001');
  });
});
