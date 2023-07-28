import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(dataString: string, ...args: unknown[]): unknown {
    return moment(dataString).format("Do MMM YY")
  }

}
