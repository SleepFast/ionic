import { Component, OnInit } from '@angular/core';
import { Tournament, TournamentService } from '../tournament.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public tournaments: Tournament[];

  constructor(private tournamentService: TournamentService, private toastController: ToastController) {}

  async deleteTournament(tournament: Tournament) {
    this.tournaments = this.tournaments.filter((t) => 
    t.id !== tournament.id)
    this.presentToast(tournament)
  }

  async presentToast(tournament: Tournament) {
    const toast = await this.toastController.create({
      message: `${tournament.name} a été supprimé`,
      duration: 3000,
      position: 'top'
    });
    
    await toast.present();
  }

  ngOnInit() {
    this.tournaments = this.tournamentService.getAll();    
  }
}
