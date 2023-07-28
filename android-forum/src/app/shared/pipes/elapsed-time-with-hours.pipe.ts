import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsedTimeWithHours'
})
export class ElapsedTimeWithHoursPipe implements PipeTransform {

  transform(dataString: string, ...args: unknown[]): unknown {
    return moment(dataString).format('Do MMMM YYYY, h:mm:ss a');
  }

}
