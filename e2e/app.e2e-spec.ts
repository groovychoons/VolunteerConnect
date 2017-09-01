import { VolunteerConnectPage } from './app.po';

describe('volunteer-connect App', () => {
  let page: VolunteerConnectPage;

  beforeEach(() => {
    page = new VolunteerConnectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
