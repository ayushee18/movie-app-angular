import { AppMoviePage } from './app.po';

describe('app-movie App', () => {
  let page: AppMoviePage;

  beforeEach(() => {
    page = new AppMoviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
