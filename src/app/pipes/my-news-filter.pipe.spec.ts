import { MyNewsFilterPipe } from './my-news-filter.pipe';

describe('MyNewsFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new MyNewsFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
