import { Injectable } from '@angular/core';

export interface Tournament {
  id: string;
  name: string;
  rosterNumber: string;
  rosters: {};
  photoUrl?: string;
  status: 'active' | 'finished';
}

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  public tournaments: Tournament[];

  constructor() {
    this.tournaments = [
      { id: '1', name: 'Jean', rosterNumber: '6', rosters: [
        {}
      ], status: 'active'},
      { id: '2', name: 'Pierre', rosterNumber: '5', rosters: [
        {}
      ], status: 'active'},
      { id: '3', name: 'Harry', rosterNumber: '8', rosters: [
        {}
      ], status: 'active'},
      { id: '4', name: 'Corinne', rosterNumber: '10', rosters: [
        {}
      ], status: 'active'},
      { id: '5', name: 'Mélusine', rosterNumber: '4', rosters: [
        {}
      ], status: 'active'},
    ]
  }

  getAll(){
    return [...this.tournaments];
  };
}
