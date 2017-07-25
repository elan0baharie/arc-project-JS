import { ArcStoryboardPage } from './app.po';

describe('arc-storyboard App', () => {
  let page: ArcStoryboardPage;

  beforeEach(() => {
    page = new ArcStoryboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
