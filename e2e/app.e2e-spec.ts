import { EbpocPage } from './app.po';

describe('ebpoc App', function() {
  let page: EbpocPage;

  beforeEach(() => {
    page = new EbpocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
