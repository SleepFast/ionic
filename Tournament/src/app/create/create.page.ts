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
  }
  
  setNewTournament() {
    return this.tournamentService.setNewCurrentTournament(this.newCurrentTournament);
  }

  getNewCurrentRosterNumber(newCurrentTournament: Tournament) {
    return this.newCurrentTournament.rosterNumber >= 2 ;
  }

  handleSave() {
    this.tournamentService.create(this.newCurrentTournament);
    console.log(this.tournamentService.getAll());
  }
}
