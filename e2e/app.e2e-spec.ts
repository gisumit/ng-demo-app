import { PropListPage } from './app.po';

describe('prop-list App', () => {
  let page: PropListPage;

  beforeEach(() => {
    page = new PropListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
