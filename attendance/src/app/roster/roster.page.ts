import { Component, OnInit } from '@angular/core';
import {  Student,StudentService } from '../student.service';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements OnInit {
  public students: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.students = this.studentService.getAll();
  }
}
