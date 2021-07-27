import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Student } from 'src/app/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  StudentsData !: any

  isVisible2 = false;
  isOkLoading2 = false;

  changePassword(): void {
    this.isVisible2 = true;
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

  getAllStudents(){
    this.api.getStudents()
    .subscribe((res: any)=>{
      this.StudentsData =res;
    })
  }

  constructor( private api :StudentsService) { }

  ngOnInit(): void {
    this.getAllStudents()
  }
}


