import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    // if no matching values, return empty array
    if (!items) {
      return [];
    }
    // if no search term, return all array elements
    else if (!searchTerm) {
      return items;
    }
    // search and filter by all object properties (cases insensitive)
    else {
      return items.filter(item => {
        return Object.keys(item).some(key => {
          return String (item[key]).toLowerCase().includes(searchTerm.toLocaleLowerCase());
        });
      });
    }
  }
}
