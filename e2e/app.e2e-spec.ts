import { HomeSpreePage } from './app.po';
import { browser, element, by } from 'protractor';

describe('spree home page', function() {
  const page = new HomeSpreePage();

  beforeEach(() => {
    page.navigateTo();
  });

  it('should redirect to home page', function() {
    const welcomeText = page.welcomeText();
    expect(welcomeText).toBeTruthy();
  });

});
