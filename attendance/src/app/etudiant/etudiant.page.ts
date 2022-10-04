import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.page.html',
  styleUrls: ['./etudiant.page.scss'],
})
export class EtudiantPage implements OnInit {
  public etudiant;
  public etudiantDetails = {};
  public editedDetails = {};

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    this.etudiant = this.activatedRoute.snapshot.paramMap.get('id'); 
    this.studentService.students.forEach((student) => {
      if (student.id == this.etudiant) {
        this.etudiantDetails = student
        this.editedDetails = Object.assign({}, student)
      }
    })

  }
  handleSave() {
    Object.assign(this.etudiantDetails, this.editedDetails)
  }

}
