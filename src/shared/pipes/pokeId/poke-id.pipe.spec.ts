import { PokeIdPipe } from './poke-id.pipe';

describe('PokeIdPipe', () => {
  it('create an instance', () => {
    const pipe = new PokeIdPipe();
    expect(pipe).toBeTruthy();
  });
});
