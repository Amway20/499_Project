import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  
  staff: AngularFireList<any[]>;

  constructor( @Inject(FirebaseService) private db: AngularFireDatabase, private router: Router,
    private firebaseService: FirebaseService, private route: ActivatedRoute) { }

  basePath = "/staff";
  staff_username = '';
  staff_password = '';
  staff_firstname = '';
  staff_lastname = '';
  
  ngOnInit() {}
  
  // async addAdmin(data: NgForm) {
  //   // console.log(data.value);
  //   await this.firebaseService.addData(data.value, this.basePath);
  //   await this.goToManageAdmin();
  // }

  async addAdmin() {
    // console.log(data.value);
    const data = {
      key: this.staff_username,
      staff_password: this.staff_password,
      staff_firstname: this.staff_firstname,
      staff_lastname: this.staff_lastname
    }
    await this.firebaseService.addData(data, this.basePath);
    await this.goToManageAdmin();
  }


  goToManageAdmin = () => {
    this.router.navigate(['/manage-admin']);
  }

}
