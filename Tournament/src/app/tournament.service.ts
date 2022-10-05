import { Injectable } from '@angular/core';

export interface Tournament {
  id: string;
  name: string;
  rosterNumber: string;
  roster: Array<Roster>;
  photoUrl?: string;
  status: 'active' | 'finished';
}

export interface Roster {
  id: string;
  pouet: string;
}

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  public tournaments: Tournament[];

  constructor() {
    this.tournaments = [
      { id: '1', name: 'Jean', rosterNumber: '6', roster: [
        {id: '1', pouet: "POUET"}, {id: '2', pouet: "tat"}
      ], status: 'active'},
      { id: '2', name: 'Pierre', rosterNumber: '5', roster: [
        {id: '1', pouet: "POUET"}, {id: '2', pouet: "pit"}
      ], status: 'active'},
      { id: '3', name: 'Harry', rosterNumber: '8', roster: [
        {id: '1', pouet: "POUET"}, {id: '2', pouet: "pat"}
      ], status: 'finished'},
      { id: '4', name: 'Corinne', rosterNumber: '10', roster: [
        {id: '1', pouet: "POUET"}, {id: '2', pouet: "prout"}
      ], status: 'active'},
      { id: '5', name: 'Mélusine', rosterNumber: '4', roster: [
        {id: '1', pouet: "POUET"}, {id: '2', pouet: "ploup"}
      ], status: 'finished'}
    ]
  }

  getAll(){
    return [...this.tournaments];
  };
}
