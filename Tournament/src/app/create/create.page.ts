import { Component, OnInit } from '@angular/core';
import { Tournament, TournamentService } from '../tournament.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  private newCurrentTournament: Tournament;

  constructor(private tournamentService: TournamentService) {}

  ngOnInit() {
    this.newCurrentTournament = {
      id: this.tournamentService.getMaxId() + 1,
      name: '',
      rosterNumber: null,
      rosters: this.setRoster(),
      status: 'active',
    };
  }

  setRoster() {
    const rosters = []
    for(let i = 1; i <= this.newCurrentTournament.rosterNumber; i++) {
      rosters.push({ id: i, name: ''})
    }
    return rosters
  }

  getNewCurrentRosterNumber(newCurrentTournament: Tournament) {
    return this.newCurrentTournament.rosterNumber >= 2 ;
  }

  handleSave() {
    this.tournamentService.create(this.newCurrentTournament);
    this.ngOnInit();
    console.log(this.tournamentService.getAll());
  }
}
