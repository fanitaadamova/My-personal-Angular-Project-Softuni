import { ElapsedTimeWithHoursPipe } from './elapsed-time-with-hours.pipe';

describe('ElapsedTimeWithHoursPipe', () => {
  it('create an instance', () => {
    const pipe = new ElapsedTimeWithHoursPipe();
    expect(pipe).toBeTruthy();
  });
});
