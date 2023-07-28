import { ElapsedTimeBeforeNowPipe } from './elapsed-time-before-now.pipe';

describe('ElapsedTimeBeforeNowPipe', () => {
  it('create an instance', () => {
    const pipe = new ElapsedTimeBeforeNowPipe();
    expect(pipe).toBeTruthy();
  });
});
