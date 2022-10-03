import { Injectable } from '@angular/core';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  parentName?: string;
  perentEmail?: string;
  perentPhone?: string;
  photoUrl?: string;
  status?: 'present' | 'absent';
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[];

  constructor() {
    this.students = [
      { id: '1', firstName: 'Jean', lastName: 'Bon'},
      { id: '2', firstName: 'Pierre', lastName: 'Afeu', status: 'absent'},
      { id: '3', firstName: 'Harry', lastName: 'Covert', status: 'absent'},
      { id: '4', firstName: 'Corinne', lastName: 'titgoute'},
      { id: '5', firstName: 'Mélusine', lastName: 'Enfaillite'},
    ]
  }

  getAll(){
    return this.students;
  };
}
