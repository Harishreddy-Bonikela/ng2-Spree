import { browser, element, by } from 'protractor';

export class HomeSpreePage {

  navigateTo() {
    return browser.get('/');
  }

  welcomeText() {
    return element(by.css('app-root h1')).getText();
  }
}
