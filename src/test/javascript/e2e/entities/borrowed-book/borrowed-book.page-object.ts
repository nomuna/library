import { element, by, ElementFinder } from 'protractor';

export class BorrowedBookComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('lbr-borrowed-book div table .btn-danger'));
  title = element.all(by.css('lbr-borrowed-book div h2#page-heading span')).first();

  async clickOnCreateButton() {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton() {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class BorrowedBookUpdatePage {
  pageTitle = element(by.id('lbr-borrowed-book-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  borrowDateInput = element(by.id('field_borrowDate'));
  bookSelect = element(by.id('field_book'));
  clientSelect = element(by.id('field_client'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setBorrowDateInput(borrowDate) {
    await this.borrowDateInput.sendKeys(borrowDate);
  }

  async getBorrowDateInput() {
    return await this.borrowDateInput.getAttribute('value');
  }

  async bookSelectLastOption() {
    await this.bookSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async bookSelectOption(option) {
    await this.bookSelect.sendKeys(option);
  }

  getBookSelect(): ElementFinder {
    return this.bookSelect;
  }

  async getBookSelectedOption() {
    return await this.bookSelect.element(by.css('option:checked')).getText();
  }

  async clientSelectLastOption() {
    await this.clientSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async clientSelectOption(option) {
    await this.clientSelect.sendKeys(option);
  }

  getClientSelect(): ElementFinder {
    return this.clientSelect;
  }

  async getClientSelectedOption() {
    return await this.clientSelect.element(by.css('option:checked')).getText();
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class BorrowedBookDeleteDialog {
  private dialogTitle = element(by.id('lbr-delete-borrowedBook-heading'));
  private confirmButton = element(by.id('lbr-confirm-delete-borrowedBook'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}
