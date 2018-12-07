import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: any, activar:boolean = true): string {
    if(activar){
      let pass:string = "";
      for(let i=0;  i<value.length; i++){
        pass+="*";
      }
      return pass;
    }
    return value;

  }

}
