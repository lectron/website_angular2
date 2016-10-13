import { WebsiteAngular2Page } from './app.po';

describe('website-angular2 App', function() {
  let page: WebsiteAngular2Page;

  beforeEach(() => {
    page = new WebsiteAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
