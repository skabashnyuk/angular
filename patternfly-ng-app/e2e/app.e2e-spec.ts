import { PatternflyNgAppPage } from './app.po';

describe('patternfly-ng-app App', () => {
  let page: PatternflyNgAppPage;

  beforeEach(() => {
    page = new PatternflyNgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
