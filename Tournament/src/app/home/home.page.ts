import { Component, OnInit } from '@angular/core';
import { Tournament, TournamentService } from '../tournament.service';
import { ToastController } from '@ionic/angular';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private tournaments: Tournament[];

  constructor(
    private tournamentService: TournamentService,
    private toastController: ToastController
  ) {}

  deleteTournament(tournament: Tournament) {
    this.tournamentService.delete(tournament);
    this.presentToast(tournament);
  }

  async presentToast(tournament: Tournament) {
    const toast = await this.toastController.create({
      message: `${tournament.name} a été supprimé`,
      duration: 3000,
      position: 'top',
    });

    await toast.present();
  }

  async openShare(tournament: Tournament) {
    await Share.share({
      title: `See my Tournament ${tournament.name}`,
      text: `This tournament is composed of ${tournament.rosterNumber} teams`,
      url: `details/${tournament.id}`,
      dialogTitle: 'Share this tournament with your friends',
    });
  }

  ngOnInit() {
    this.tournaments = this.tournamentService.getAll();
    console.log('home ngOninit');
  }

  getTournaments() {
    return this.tournamentService.getAll();
  }
}
