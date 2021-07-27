import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-deletestudents',
  templateUrl: './deletestudents.component.html',
  styleUrls: ['./deletestudents.component.css']
})
export class DeletestudentsComponent implements OnInit {


  confirmModal?: NzModalRef;

  showDeleteConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete this record?',
      nzContent: 'A deleted record cannot be recovered',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))


      });




  }

  constructor(private modal: NzModalService) { }

  ngOnInit(): void {
  }

}
