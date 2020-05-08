import { Component, OnInit } from '@angular/core';

interface Istudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  students: Array<Istudent> = [];

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Paul',
      lastName: 'Salacup',
      course: 'Programming'
    };
    this.students[1] = {
      id: 1,
      firstName: 'Kobe',
      lastName: 'Bryant',
      course: 'Basketball'
    };
    this.students[2] = {
      id: 1,
      firstName: 'Timmy',
      lastName: 'Turner',
      course: 'Business'
    };
  }

  ngOnInit(): void {
  }

  addStudent() {
    const student: Istudent = {
      id: 1,
      firstName: 'Jimmy',
      lastName: 'Neutron',
      course: 'Scientist'
    };

    this.students.push(student);
  }


}
