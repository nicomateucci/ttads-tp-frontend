import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPorTitulo'
})
export class FiltroPorTituloPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    // console.log("En filtro")

    if (arg === '' || arg.length < 3) return value;

    const result = [];
    for(const v of value){
      if (v.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        result.push(v);
      };
    };
    return result;
  }

}
