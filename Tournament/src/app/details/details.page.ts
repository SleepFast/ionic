import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament, TournamentService } from '../tournament.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private tournamentId;
  private tournamentDetails: Tournament;
  private group;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tournamentService: TournamentService
  ) {}

  ngOnInit() {    
    this.tournamentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.tournamentDetails = this.tournamentService
      .getAll()
      .filter((tournament) => {
        return tournament.id == this.tournamentId;
    })[0];
    this.group = this.tournamentService.getGroups(this.tournamentDetails);
  }

  updateGroup(winner) {
    this.keepWinner(winner);

  }

  keepWinner(winner) {
    let currentMatch = this.group.find(match => match.some(roster => roster.id === winner.id));
    console.log(this.group, winner, currentMatch);
    currentMatch.length = 0;
    Object.assign(currentMatch, [winner]);
    console.log(currentMatch)    
  }

}
