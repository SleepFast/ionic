import { Component } from '@angular/core';
import { Tournament, TournamentService } from './tournament.service';


export interface Page {
  title: string;
  url: string;
  icon: string;
  tab: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private tournaments: Tournament[];

  constructor(private tournamentService: TournamentService) {}

  public appPages: Page[] = [
    {
      title: 'Tournaments',
      url: 'home',
      icon: 'game-controller-outline',
      tab: 'tournament'
    },
    {
      title: 'New Tournament',
      url: 'create',
      icon: 'golf-outline',
      tab: 'new tournament'
    },
  ];

  ngOnInit() {
    this.tournaments = this.tournamentService.getAll();
  }
}
