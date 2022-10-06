import { Injectable } from '@angular/core';

export interface Tournament {
  id: number;
  name: string;
  rosterNumber: number;
  rosters: Array<Rosters>;
  photoUrl?: string;
  status: 'active' | 'finished';
}

export interface Rosters {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  public tournaments: Tournament[] = [
    {
      id: 1,
      name: 'Jean',
      rosterNumber: 6,
      rosters: [
        { id: 1, name: 'POUET' },
        { id: 2, name: 'tat' },
      ],
      status: 'active',
    },
    {
      id: 2,
      name: 'Pierre',
      rosterNumber: 5,
      rosters: [
        { id: 1, name: 'POUET' },
        { id: 2, name: 'pit' },
      ],
      status: 'finished',
    },
    {
      id: 3,
      name: 'Harry',
      rosterNumber: 8,
      rosters: [
        { id: 1, name: 'POUET' },
        { id: 2, name: 'pat' },
      ],
      status: 'finished',
    },
    {
      id: 4,
      name: 'Corinne',
      rosterNumber: 10,
      rosters: [
        { id: 1, name: 'POUET' },
        { id: 2, name: 'prout' },
      ],
      status: 'active',
    },
    {
      id: 5,
      name: 'Mélusine',
      rosterNumber: 4,
      rosters: [
        { id: 1, name: 'POUET' },
        { id: 2, name: 'ploup' },
      ],
      status: 'finished',
    },
  ];
  private tournament;
  public maxId;
  public newCurrentTournament;

  constructor() {}

  setNewCurrentTournament(newCurrentTournament: Tournament) {
    this.newCurrentTournament = {
      id: this.getMaxId() + 1,
      name: '',
      rosterNumber: null,
      rosters: this.setRoster(),
      status: 'active',
    };
    return this.newCurrentTournament;
  }

  setRoster() {
    const rosters = []
    if (this.newCurrentTournament.rosterNumber >= 2) {
      for(let i = 1; i <= this.newCurrentTournament.rosterNumber; i++) {
        rosters.push({ id: i, name: ''})
      }
    }
    return rosters
  }

  create(tournament: Tournament) {
    this.tournaments.push(tournament);
  }

  delete(tournament: Tournament) {
    this.tournaments = this.tournaments.filter((t) => t.id !== tournament.id);
  }

  getAll() {
    return this.tournaments;
  }

  getMaxId() {
    this.maxId = Math.max(...this.tournaments.map(idNumber => idNumber.id));
    return this.maxId + 1
  }

  getNbTournaments() {
    return this.tournaments.length;
  }
}
