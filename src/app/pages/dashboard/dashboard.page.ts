import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user: User;

  isOpen : boolean = false;

  tasks : any[] = [];

  newTask : string;

  constructor(private menu: MenuController, private authService: AuthService) {
    this.menu.enable(true);
  }

  Ajoutprod(){ // permet l'ajout de produit
    var task = {
      isChecked : false,
      content : this.newTask
    }
    this.newTask = '',
    this.tasks.push(task);
  }

  supprprod(i){ // permet de supprimer un produit
    this.tasks.splice(i, 1);
  }

  onCheck(event, i){
    this.tasks[i].isChecked = event.detail.checked;
  }


  ngOnInit() {

  }

  ionViewWillEnter() {
    this.authService.user().subscribe(
      user => {
        this.user = user;
      }
    );
  }
}


