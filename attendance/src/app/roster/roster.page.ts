import { Component, OnInit } from '@angular/core';
import { ActionSheetController,AlertController,ToastController } from '@ionic/angular';
import {  Student,StudentService } from '../student.service';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements OnInit {
  public students: Student[];

  constructor(private studentService: StudentService,
    private actionSheetCtrl: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController) {
  }

  async deleteStudent(student: Student) {
    this.students = this.students.filter((s) => s.id !== student.id);
    console.log(this.students);
    this.presentToast(student);
  }

  async presentToast(student: Student) {
    const toast = await this.toastController.create({
      message: `${student.firstName} ${student.lastName} a été supprimé`,
      duration: 3000,
      position: 'top'
    });

    await toast.present();
  }

  async presentAlert(student: Student) {
    const alert = await this.alertController.create({
      header: 'Supprimer cette étudiant ?',
      subHeader: `${student.firstName} ${student.lastName}`,
      message: 'Cette opération ne pourra pas être annulé',
      buttons: [
        {
          text: 'Supprimer',
          handler: () => {
            this.deleteStudent(student);
          }
        },
        {
          text: 'Finalement non ...',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  async presentActionSheet(student: Student) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: `${student.firstName} ${student.lastName}`,
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => {
            this.presentAlert(student);
          }
        },
        {
          icon: 'eye-outline',
          text: 'Mark present',
          data: {
            action: 'share',
          },
          handler: () => {
            student.status = 'present';
          }
        },
        {
          icon: 'eye-off-outline',
          text: 'Mark absent',
          data: {
            action: 'share',
          },
          handler: () => {
            student.status = 'absent';
          }
        },
        {
          icon: 'close-outline',
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          handler: () => {}
        },
      ],
    });

    actionSheet.present();
  }


  ngOnInit() {
    this.students = this.studentService.getAll();
  }
}
