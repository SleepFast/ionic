import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public tournamentId = '';
  public tournamentDetails = {};

  constructor(private activatedRoute: ActivatedRoute, private studentService: TournamentService) { }

  ngOnInit() {
    this.tournamentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.studentService.tournaments.forEach((tournament) => {
      if (tournament.id === this.tournamentId) {
        this.tournamentDetails = tournament;
      }
    });
  }

}
