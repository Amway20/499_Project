import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseService } from '../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {

  list: AngularFireList<any[]>;
  dataList: any;
  s_username: any;
  s_password: any;
  s_firstname: any;
  s_lastname: any;
  basePath = "/staff";

  constructor(@Inject(FirebaseService) private router: Router,private firebaseService: FirebaseService,
    private db:AngularFireDatabase, private route: ActivatedRoute) {}

  ngOnInit() {
    this.list = this.firebaseService.getList(this.basePath);
    // console.log("lookkkkkk"+this.list);
    // this.allKey = this.firebaseService.getKey(this.basePath);
  }

  setDelAdmin(data){
    this.s_username = data.key;
    this.s_password= data.staff_password;
    this.s_firstname = data.staff_firstname;
    this.s_lastname = data.staff_lastname;
  }

  delStaff(){
    const data = {
      key: this.s_username,
      staff_password: this.s_password,
      staff_firstname: this.s_firstname,
      staff_lastname: this.s_lastname
    }
    this.firebaseService.delData(data,this.basePath);
  }

  setData(data) {
    this.dataList = data;
    // console.log(this.dataList);
    this.s_username = data.key;
    this.s_password = data.staff_password;
    this.s_firstname = data.staff_firstname;
    this.s_lastname = data.staff_lastname;
    // console.log("id====="+this.s_id);
  }

  editData(s_username, s_password, s_firstname, s_lastname) {
    // console.log("id======="+student_id)]
    const dataObj = {
      key : s_username,
      staff_password: s_password,
      staff_firstname: s_firstname,
      staff_lastname : s_lastname
    };
    // console.log(dataObj);
    this.firebaseService.editData(this.dataList.key, dataObj, this.basePath);
  }
}

