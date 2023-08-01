import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { ElapsedTimeWithHoursPipe } from './pipes/elapsed-time-with-hours.pipe';
import { ElapsedTimeBeforeNowPipe } from './pipes/elapsed-time-before-now.pipe';


@NgModule({
  declarations: [
    LoaderComponent,
    ElapsedTimePipe,
    ElapsedTimeWithHoursPipe,
    ElapsedTimeBeforeNowPipe
  ],
  imports: [
    CommonModule    
  ],
  exports: [
    LoaderComponent,
    ElapsedTimePipe,
    ElapsedTimeWithHoursPipe,
    ElapsedTimeBeforeNowPipe
  ]
})
export class SharedModule { }
