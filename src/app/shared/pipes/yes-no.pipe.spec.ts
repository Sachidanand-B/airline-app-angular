import { YesNoPipe } from './yes-no.pipe';

describe('TimeCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new YesNoPipe();
    expect(pipe).toBeTruthy();
  });
});
