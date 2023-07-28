import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsedTimeBeforeNow'
})
export class ElapsedTimeBeforeNowPipe implements PipeTransform {

  transform(dataString: string, ...args: unknown[]): unknown {
    return moment(dataString).fromNow();
  }

}
