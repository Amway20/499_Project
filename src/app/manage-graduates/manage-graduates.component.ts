import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseService } from '../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-graduates',
  templateUrl: './manage-graduates.component.html',
  styleUrls: ['./manage-graduates.component.css']
})
export class ManageGraduatesComponent implements OnInit {

  studentList: any;
  dataList: any;
  s_id: any;
  s_firstname: any;
  s_lastname: any;
  searchData: any;
  searchTemp = [];
  studentTemp = [];

  constructor(@Inject(FirebaseService) private router: Router, private firebaseService: FirebaseService,
    private db: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit() {
    this.studentList = this.firebaseService.getList('/student');
    this.studentList.subscribe(data => {
      this.studentTemp = [];
      data.forEach(element => {
        this.studentTemp.push(element);
        this.searchTemp.push(element);
      });
    });
  }

  deleteData() {
    const data = {
      key: this.s_id,
      student_firstname: this.s_firstname,
      student_lastname: this.s_lastname
    }
    this.firebaseService.delData(data, '/student');
    this.studentTemp = [];
  }

  setDelStudent(data){
    this.s_id = data.key;
    this.s_firstname = data.student_firstname;
    this.s_lastname = data.student_lastname;
  }

  setData(data) {
    // console.log(this.dataList);
    this.s_id = data.key;
    this.s_firstname = data.student_firstname;
    this.s_lastname = data.student_lastname;
    // console.log("id====="+this.s_id);
  }

  editData(s_id, s_password, s_firstname, s_lastname) {
    // console.log("id======="+student_id)]
    const dataObj = {
      key: s_id,
      student_firstname: s_firstname,
      student_lastname: s_lastname
    };
    // console.log(dataObj);
    this.firebaseService.editData(s_id, dataObj, '/student');
    this.studentTemp = [];
  }

  search() {
    console.log(this.searchData);
    console.log(this.searchData.length);
    this.studentTemp = [];
    this.studentList.subscribe(data => {
      data.forEach(tmp => {
        let keySearch = tmp.key;
        if (keySearch.substring(0, this.searchData.length) == this.searchData) {
          this.studentTemp.push(tmp);
        }
      });
    });
    // }
  }

  searchAll() {
    this.studentTemp = [];
    this.studentList.subscribe(data => {
      data.forEach(tmp => {
        this.studentTemp.push(tmp);
      });
    });
  }
}
