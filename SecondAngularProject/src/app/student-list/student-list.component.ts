import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  template: `
    <p class="custom">
      student-list works!
    </p>
  `,
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
