import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pokeId', standalone: true })
export class PokeIdPipe implements PipeTransform {
  transform(value: number, maxCount: number): string {
    return `#${value.toString().padStart(maxCount, '0')}`;
  }
}
