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
      id: this.tournamentService.getMaxId(),
      name: '',
      rosterNumber: null,
      rosters: this.tournamentService.returnRoster(),
      status: 'active',
    };
  }

  handleCreate() {
    this.tournamentService.create(this.newCurrentTournament);
    this.ngOnInit();
    this.tournamentService.newRoster(this.newCurrentTournament);
  }

  handleSave() {
    console.log(this.newCurrentTournament);
    this.tournamentService.setRoster(this.newCurrentTournament);
  }
}
