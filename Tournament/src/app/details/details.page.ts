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
  }
}
