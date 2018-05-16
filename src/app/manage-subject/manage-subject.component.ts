import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseService } from '../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-subject',
  templateUrl: './manage-subject.component.html',
  styleUrls: ['./manage-subject.component.css']
})
export class ManageSubjectComponent implements OnInit {

  list: AngularFireList<any[]>;
  dataList: any;
  s_id: any;
  s_name: any;
  s_type: any;
  clearData1: any;
  clearData2: any;
  basePath = "/subject";
  addSubjectForm: FormGroup;
  add_subject_id: any;
  add_subject_name: any;
  add_subject_type: any;
  constructor(@Inject(FirebaseService) private router: Router,private firebaseService: FirebaseService,
    private db:AngularFireDatabase) {}

  ngOnInit() {
    this.list = this.firebaseService.getList(this.basePath);
    // console.log(this.list);
    // this.allKey = this.firebaseService.getKey(this.basePath);
  }

  addData() {
    console.log(this.add_subject_type);
    
    const data = {
      key: this.add_subject_id,
      subject_name: this.add_subject_name,
      subject_type: this.add_subject_type
    }
    this.firebaseService.addData(data, this.basePath);
    this.add_subject_id = '';
    this.add_subject_name = '';
    this.add_subject_type = '';

  }

  setDelSubject(data){
    this.s_id = data.key;
    this.s_name = data.subject_name;
    this.s_type = data.subject_type;
  }

  delSubject(){
    const data = {
      key: this.s_id,
      subject_name: this.s_name,
      subject_type: this.s_type
    };
    this.firebaseService.delData(data,this.basePath);
  }

  setData(data) {
    this.dataList = data;
    // console.log(this.dataList);
    this.s_id = data.key;
    this.s_name = data.subject_name;
    this.s_type = data.subject_type;
  }

  editData() {
    // console.log("id======="+student_id)]
    const dataObj = {
      key: this.s_id,
      subject_name: this.s_name,
      subject_type: this.s_type
    };
    // console.log(dataObj);
    this.firebaseService.editData(this.dataList.key, dataObj, this.basePath);
  }

  clearData(data: NgForm){
    if(data.value!=null){
      this.clearData1=null;
      this.clearData2=null;
    }
  }
}