import { RealTimeParkingSystemPage } from './app.po';

describe('real-time-parking-system App', function() {
  let page: RealTimeParkingSystemPage;

  beforeEach(() => {
    page = new RealTimeParkingSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
