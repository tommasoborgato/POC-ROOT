import { ANGULAR2POCPage } from './app.po';

describe('angular2-poc App', function() {
  let page: ANGULAR2POCPage;

  beforeEach(() => {
    page = new ANGULAR2POCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
