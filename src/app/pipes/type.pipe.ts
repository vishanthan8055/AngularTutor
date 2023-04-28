import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(products: any, selected:string) {
    return products.filter((x:any)=>x.type == selected);
  }

}
