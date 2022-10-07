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
  groupId?: number;
}

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  public rosters: Rosters[] = [];
  public tournaments: Tournament[] = [];
  private maxId;

  constructor() {}

  /** 
  *@param tournament
  */
  newRoster(tournament: Tournament) {
    tournament.rosters = [];
    this.rosters = [];
  }

  /** 
  *@param tournament
  */
  setRoster(tournament: Tournament) {
    for(let i = 1; i <= tournament.rosterNumber; i++) {
      this.rosters.push({ id: i, name: ''});
    }
    tournament.rosters = this.rosters;
  }

  /** 
  *@param tournament
  */
  returnRoster() {
    return this.rosters;
  }

  /** 
  *@param tournament
  */
  create(tournament: Tournament) {
    this.tournaments.push(tournament);
  }

  /** 
  *@param tournament
  */
  delete(tournament: Tournament) {
    this.tournaments = this.tournaments.filter((t) => t.id !== tournament.id);
  }

  getAll() {
    return this.tournaments;
  }

  getMaxId() {
    if (this.tournaments.length === 0) {
      this.maxId = 1;
    } else {
      this.maxId = Math.max(...this.tournaments.map(idNumber => idNumber.id));
    }
    
    return this.maxId + 1;
  }

  getNbTournaments() {
    return this.tournaments.length;
  }

  /** 
  *@param tournament
  */
  randomizeRosters(tournament: Tournament) {
    tournament.rosters.sort(()=> Math.random() - 0.5);
    return tournament.rosters;
  }

  /** 
  *@param tournament
  */
  setGroups(tournament: Tournament) {
    let groupId = 1;
    for(let i = 0; i<tournament.rosters.length - 1; i+=2) {
      tournament.rosters[i].groupId = groupId;
      tournament.rosters[i+1].groupId = groupId;
      groupId++;
    }
  }
  
  /** 
  *@param tournament
  */
  getGroups(tournament: Tournament) {
    let tableGroup = [];
    for(let i = 1; i<tournament.rosters.length-1; i++) {
      tableGroup.push(tournament.rosters.filter(x => x.groupId == i));
    }
    return tableGroup;
  }

}
