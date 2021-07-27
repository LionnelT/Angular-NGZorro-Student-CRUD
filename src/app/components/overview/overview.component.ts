import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  isVisible = false;
  isOkLoading = false;

  isVisible2 = false;
  isOkLoading2 = false;

  changePassword(): void {
    this.isVisible2 = true;
  }

  confirmModal?: NzModalRef;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 500);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk2(): void {
    this.isOkLoading2 = true;
    setTimeout(() => {
      this.isVisible2 = false;
      this.isOkLoading2 = false;
    }, 1000);
  }

  handleCancel2(): void {
    this.isVisible2 = false;
  }

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

  constructor( private modal: NzModalService) { }

  ngOnInit(): void {
  }

  listOfData: Student[] = [
    {
      key: '1',
      firstname: "Lionnel",
      lastname: "T",
      age: 21,
      gender: "Male"
    },
    {
      key: '2',
      firstname: "Kate",
      lastname: "D",
      age: 21,
      gender: "Female"
    },
    {
      key: '3',
      firstname: "Jane",
      lastname: "Doe",
      age: 20,
      gender: "Female"
    },
    {
      key : '4',
      firstname: "John",
      lastname: "Doe",
      age: 20,
      gender: "Male"
    }
  ];

  delete = (index:any) => {
    this.listOfData.splice(index, 1)
    console.log(index);
  }

}



