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
      id: this.tournamentService.getAll().length + 1,
      name: '',
      rosterNumber: '',
      roster: [],
      status: 'active',
    };
  }

  handleSave() {
    this.tournamentService.create(this.newCurrentTournament);
    console.log(this.tournamentService.getAll());
  }
}
