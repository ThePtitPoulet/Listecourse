import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  // fonction retour en arriere
  retourconnexion() {
    this.modalController.dismiss();
  }

  // lors de l'appui sur inscription, on ferme connexion et ouvre inscription 
  async registerModal() {
    this.retourconnexion();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  login(form: NgForm) { // permet la connexion et renvoie vers le dashboard
    this.authService.login(form.value.email, form.value.password).subscribe(
      _data => {
        this.alertService.presentToast("Logged In");
      },
      error => {
        console.log(error);
      },
      () => {
        this.retourconnexion();
        this.navCtrl.navigateRoot('/list');
      }
    );
  }
}
