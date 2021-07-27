import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editstudents',
  templateUrl: './editstudents.component.html',
  styleUrls: ['./editstudents.component.css']
})
export class EditstudentsComponent implements OnInit {

  isVisible = false;
  isOkLoading = false;

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

  showModal(): void {
    this.isVisible = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
