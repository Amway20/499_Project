import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-add-grad',
  templateUrl: './add-grad.component.html',
  styleUrls: ['./add-grad.component.css']
})
export class AddGradComponent implements OnInit {

  constructor( @Inject(FirebaseService) private db: AngularFireDatabase, private router: Router,
  private firebaseService: FirebaseService, private route: ActivatedRoute) { }

  basePath = "/student";
  student_id = '';
  student_firstname = '';
  student_lastname = '';
  studentData = [];

  ngOnInit() {
  }

  arrayBuffer:any;
file:File;
incomingfile(event) 
  {
  this.file= event.target.files[0]; 
  }

 Upload() {  
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            alert(data.length)
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            // console.log(XLSX.utils.sheet_to_json(worksheet));
            XLSX.utils.sheet_to_json(worksheet).forEach(tmp => {
              this.studentData.push(tmp);
            });
        }
        fileReader.readAsArrayBuffer(this.file)
        console.log(this.studentData);
}

  async addGrad() {
    // console.log(data.value);
    const data = {
      key: this.student_id,
      student_firstname: this.student_firstname,
      student_lastname: this.student_lastname
    }
    await this.firebaseService.addData(data, this.basePath);
    await this.goToManageGraduates();
  }

  async addDataExcel(){
    await this.studentData.forEach(tmp => {
      const data = {
        key: tmp.student_id,
        student_firstname: tmp.student_firstname,
        student_lastname: tmp.student_lastname
      }
      this.firebaseService.addData(data, this.basePath);
    });
    await this.goToManageGraduates();
  }

  clearData(){
    this.studentData = [];
  }

  goToManageGraduates = () => {
    this.router.navigate(['/manage-graduates']);
  }
}
