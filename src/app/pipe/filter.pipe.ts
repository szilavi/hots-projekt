import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: any[] | null,
    key: string,
    phrase: string | number | boolean
  ): any[] | null {
    if (!Array.isArray(value) || !key || !phrase) {
      return value;
    }
    phrase = typeof phrase !== 'number' ? ('' + phrase).toLowerCase() : phrase;

    if (key === 'owned') {
      if (phrase === 'owned') {
        return value.filter((item) => item['owned'] === true);
      }
    }

    if (key === 'owned') {
      if (phrase === 'not') {
        return value.filter((item) => item['owned'] === false);
      }
    }

    if (key === 'owned') {
      if (phrase === 'not owned') {
        return value.filter((item) => item['owned'] === false);
      }
    }

    return value.filter((item) => {
      if (typeof item[key] === 'number' && typeof phrase === 'number') {
        return item[key] === phrase;
      }

      return ('' + item[key]).toLowerCase().includes(phrase as string);
    });
  }
}
