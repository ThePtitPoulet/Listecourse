import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  crealist() { // permet la creation de la liste en renvoyant vers la liste
    this.route.navigate(['/dashboard']);
  }

}





