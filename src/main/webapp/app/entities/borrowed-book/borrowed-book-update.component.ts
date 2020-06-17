import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { IBorrowedBook, BorrowedBook } from 'app/shared/model/borrowed-book.model';
import { BorrowedBookService } from './borrowed-book.service';
import { IBook } from 'app/shared/model/book.model';
import { BookService } from 'app/entities/book/book.service';
import { IClient } from 'app/shared/model/client.model';
import { ClientService } from 'app/entities/client/client.service';

@Component({
  selector: 'lbr-borrowed-book-update',
  templateUrl: './borrowed-book-update.component.html'
})
export class BorrowedBookUpdateComponent implements OnInit {
  isSaving: boolean;

  books: IBook[];

  clients: IClient[];
  borrowDateDp: any;

  editForm = this.fb.group({
    id: [],
    borrowDate: [],
    book: [],
    client: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected borrowedBookService: BorrowedBookService,
    protected bookService: BookService,
    protected clientService: ClientService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ borrowedBook }) => {
      this.updateForm(borrowedBook);
    });
    this.bookService.query({ 'borrowedBookId.specified': 'false' }).subscribe(
      (res: HttpResponse<IBook[]>) => {
        if (!this.editForm.get('book').value || !this.editForm.get('book').value.id) {
          this.books = res.body;
        } else {
          this.bookService
            .find(this.editForm.get('book').value.id)
            .subscribe(
              (subRes: HttpResponse<IBook>) => (this.books = [subRes.body].concat(res.body)),
              (subRes: HttpErrorResponse) => this.onError(subRes.message)
            );
        }
      },
      (res: HttpErrorResponse) => this.onError(res.message)
    );
    this.clientService.query({ 'borrowedBookId.specified': 'false' }).subscribe(
      (res: HttpResponse<IClient[]>) => {
        if (!this.editForm.get('client').value || !this.editForm.get('client').value.id) {
          this.clients = res.body;
        } else {
          this.clientService
            .find(this.editForm.get('client').value.id)
            .subscribe(
              (subRes: HttpResponse<IClient>) => (this.clients = [subRes.body].concat(res.body)),
              (subRes: HttpErrorResponse) => this.onError(subRes.message)
            );
        }
      },
      (res: HttpErrorResponse) => this.onError(res.message)
    );
  }

  updateForm(borrowedBook: IBorrowedBook) {
    this.editForm.patchValue({
      id: borrowedBook.id,
      borrowDate: borrowedBook.borrowDate,
      book: borrowedBook.book,
      client: borrowedBook.client
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const borrowedBook = this.createFromForm();
    if (borrowedBook.id !== undefined) {
      this.subscribeToSaveResponse(this.borrowedBookService.update(borrowedBook));
    } else {
      this.subscribeToSaveResponse(this.borrowedBookService.create(borrowedBook));
    }
  }

  private createFromForm(): IBorrowedBook {
    return {
      ...new BorrowedBook(),
      id: this.editForm.get(['id']).value,
      borrowDate: this.editForm.get(['borrowDate']).value,
      book: this.editForm.get(['book']).value,
      client: this.editForm.get(['client']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IBorrowedBook>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackBookById(index: number, item: IBook) {
    return item.id;
  }

  trackClientById(index: number, item: IClient) {
    return item.id;
  }
}
