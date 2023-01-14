import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: any,serchTerm:any):any{
    // if(value.length===0)
    // {return value;}
    // else{
      // console.log(value)
      return value.filter(function(search)
      {
        return search.name.toUpperCase().indexOf(serchTerm.toUpperCase())> -1;
      // });
    });
    
  }
   
  }


