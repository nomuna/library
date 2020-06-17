import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPublisher } from 'app/shared/model/publisher.model';
import { PublisherService } from './publisher.service';

@Component({
  templateUrl: './publisher-delete-dialog.component.html'
})
export class PublisherDeleteDialogComponent {
  publisher: IPublisher;

  constructor(protected publisherService: PublisherService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.publisherService.delete(id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'publisherListModification',
        content: 'Deleted an publisher'
      });
      this.activeModal.dismiss(true);
    });
  }
}
