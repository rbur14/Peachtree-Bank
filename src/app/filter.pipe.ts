import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items) {
      return [];
    }
    else if (!searchTerm) {
      return items;
    }
    else {
      return items.filter(item => {
        return Object.keys(item).some(key => {
          return String (item[key]).toLowerCase().includes(searchTerm.toLocaleLowerCase());
        });
      });
    }
  }
}
