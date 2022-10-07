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

  check() {
    let a = false
    for(const roster of this.tournamentService.returnRoster()) {
      if(roster.name === '') {
        a = false;
        break
      } else {
        a = true;
      }
    }
    return a;
  }

  handleCreate() {
    this.tournamentService.create(this.newCurrentTournament);
    this.tournamentService.randomizeRosters(this.newCurrentTournament);
    this.tournamentService.setGroups(this.newCurrentTournament);
    this.ngOnInit();
    this.tournamentService.newRoster(this.newCurrentTournament);
  }

  handleSave() {
    this.tournamentService.setRoster(this.newCurrentTournament);
  }
}
