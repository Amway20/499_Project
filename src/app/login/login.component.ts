import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';
import { FirebaseService } from '../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  title = 'เข้าสู่ระบบ';
  staffList: any;
  studentList: any;
  staffPath = "/staff";
  studentPath = "/student";
  dataTemp: AngularFireList<any[]>;
  username: any;
  password: any;
  staffArray = [];
  studentArray = [];
  status: any;
  studentId: any;
  loginStatus: any;

  constructor(private router: Router, private loginService: LoginServiceService,private firebaseService: FirebaseService,
    private db: AngularFireDatabase) { }

  ngOnInit() {
    this.staffList = this.firebaseService.getList('/staff');
    this.studentList = this.firebaseService.getList('/student')
  }

  userLogin() {
    console.log(this.status);
    
    if (this.status == undefined && this.studentId == undefined) {
      alert("กรุณากรอกรหัสนักศึกษา หรือเลือกเข้าระบบในฐานะผู้ประกอบการ")
    } else if ((this.status == undefined && this.studentId == undefined) || (this.status == undefined && this.studentId == '')) {
      alert("กรุณากรอกรหัสนักศึกษา")
    } else if (this.status == true) {
      localStorage.setItem('target', 'ผู้ประกอบการ');
      this.goToDoSurvey();
    } else if (this.status == undefined && this.studentId != undefined) {
      this.studentList.subscribe(data => {
        data.forEach(tmp => {
          this.studentArray.push(tmp);
          // console.log(this.studentArray);
        });
        for (var i = 0; i < this.studentArray.length; i++) {
          if (this.studentArray[i].key == this.studentId) {
            console.log("yeah!!!");
            localStorage.setItem('key', this.studentArray[i].key);
            localStorage.setItem('target', 'บัณฑิต');
            this.loginStatus = 1;
            this.goToDoSurvey();
          }
        }
        if (this.loginStatus != 1) {
          alert("รหัสนักศึกษาไม่ถูกต้อง");
          this.studentId = '';
          this.loginStatus = '';
        }
      });
    }
  }

  adminLogin() {
    if (this.username == undefined && this.password == undefined) {
      alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน")
    } else if (this.username == undefined || this.password == undefined || this.username == '' || this.password == '') {
      alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน")
    } else if (this.username == '' && this.password == '') {
      alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน")
    } else {
      this.staffList.subscribe(data => {
        data.forEach(tmp => {
          this.staffArray.push(tmp);
          // console.log(this.array);
        });
        for (var i = 0; i < this.staffArray.length; i++) {
          if (this.staffArray[i].key == this.username && this.staffArray[i].staff_password == this.password) {
            console.log("yeah!!!");
            this.loginStatus = 1;
            this.goToDashboard();
          }
        }
        if (this.loginStatus != 1) {
          alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
          this.username = '';
          this.password = '';
          this.loginStatus = '';
        }
        // console.log(this.staffArray[0].staff_username);
      });
    }
  }
  login() {
    if (this.status == undefined && this.username == undefined && this.password == undefined) {
      alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน หรือเลือกเข้าระบบในฐานะผู้ประกอบการ")
    } else if (this.status == undefined && this.username == undefined) {
      alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน หรือเลือกเข้าระบบในฐานะผู้ประกอบการ")
    }
    console.log("status====" + this.status);
    console.log("studentId====" + this.studentId);
    console.log("username====" + this.username);
    console.log("password====" + this.password);
    this.staffList = this.loginService.getList(this.staffPath);
    this.studentList = this.loginService.getList(this.studentPath);

    if (this.status == true) {
      localStorage.setItem('target', 'ผู้ประกอบการ');
      this.goToDoSurvey();
    } else if (this.status != true && this.username != undefined && this.password != undefined) {
      this.staffList.subscribe(data => {
        data.forEach(tmp => {
          this.staffArray.push(tmp);
          // console.log(this.array);
        });
        for (var i = 0; i < this.staffArray.length; i++) {
          if (this.staffArray[i].key == this.username && this.staffArray[i].staff_password == this.password) {
            console.log("yeah!!!");
            this.goToDashboard();
          }
        }
        // console.log(this.staffArray[0].staff_username);
      });

    } else if (this.status != true && this.studentId != undefined) {
      this.studentList.subscribe(data => {
        data.forEach(tmp => {
          this.studentArray.push(tmp);
          // console.log(this.studentArray);
        });
        for (var i = 0; i < this.studentArray.length; i++) {
          if (this.studentArray[i].key == this.studentId) {
            console.log("yeah!!!");
            localStorage.setItem('key', this.studentArray[i].key);
            localStorage.setItem('target', 'บัณฑิต');
            this.goToDoSurvey();
          }
        }
      });
    } else {
      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      this.username = '';
      this.password = '';
    }
    // console.log(this.studentArray[0].student_id);


  }



  goToDashboard() {
    this.router.navigate(['/manage-graduates']);
  }

  goToDoSurvey() {
    this.router.navigate(['/do-survey']);
  }
}