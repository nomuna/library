import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BorrowedBook } from 'app/shared/model/borrowed-book.model';
import { BorrowedBookService } from './borrowed-book.service';
import { BorrowedBookComponent } from './borrowed-book.component';
import { BorrowedBookDetailComponent } from './borrowed-book-detail.component';
import { BorrowedBookUpdateComponent } from './borrowed-book-update.component';
import { IBorrowedBook } from 'app/shared/model/borrowed-book.model';

@Injectable({ providedIn: 'root' })
export class BorrowedBookResolve implements Resolve<IBorrowedBook> {
  constructor(private service: BorrowedBookService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IBorrowedBook> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((borrowedBook: HttpResponse<BorrowedBook>) => borrowedBook.body));
    }
    return of(new BorrowedBook());
  }
}

export const borrowedBookRoute: Routes = [
  {
    path: '',
    component: BorrowedBookComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'libraryApp.borrowedBook.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: BorrowedBookDetailComponent,
    resolve: {
      borrowedBook: BorrowedBookResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'libraryApp.borrowedBook.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: BorrowedBookUpdateComponent,
    resolve: {
      borrowedBook: BorrowedBookResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'libraryApp.borrowedBook.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: BorrowedBookUpdateComponent,
    resolve: {
      borrowedBook: BorrowedBookResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'libraryApp.borrowedBook.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
