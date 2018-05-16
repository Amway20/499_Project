import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FirebaseService } from '../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-do-survey',
  templateUrl: './do-survey.component.html',
  styleUrls: ['./do-survey.component.css']
})
export class DoSurveyComponent implements OnInit {

  studentID: any;
  surveyTarget: any;
  surveyList: any;
  doSurveyList: any;
  surveyTemp = [];
  doSurveyTemp = [];

  public allSurvey: Array<Object> = [];

  constructor(private router: Router, private firebaseService: FirebaseService,
    private db: AngularFireDatabase) { }

  ngOnInit() {
    this.studentID = localStorage.getItem("key");
    this.surveyTarget = localStorage.getItem("target");
    this.surveyList = this.firebaseService.getList('/survey');
    this.doSurveyList = this.firebaseService.getList('/do_survey');

    this.doSurveyList.subscribe(data => {
      data.forEach(tmp => {
        if (tmp.target_id == this.studentID) {
          this.doSurveyTemp.push(tmp);
        }
      });
      console.log(this.doSurveyTemp);
    });

    this.surveyList.subscribe(data => {
      data.forEach(tmp => {
        if (tmp.target == this.surveyTarget) {
          this.surveyTemp.push(tmp);
        }
      });
      console.log(this.surveyTemp);

      this.surveyTemp.forEach(tmp => {
        let index = this.doSurveyTemp.findIndex(item => item.survey_id == tmp.key);
        if (index == -1) {
          const data = {
            key: tmp.key,
            survey_name: tmp.survey_name,
            description: tmp.description,
            status: 'no'
          }
          this.allSurvey.push(data);
        } else {
          const data = {
            key: tmp.key,
            survey_name: tmp.survey_name,
            description: tmp.description,
            status: 'yes'
          }
          this.allSurvey.push(data);
        }

      });
      console.log(this.allSurvey);
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToAddDoSurvey(data) {
    localStorage.setItem('survey_key', data.key);
    console.log(data.survey_name);
    this.router.navigate(['/add-do-survey']);
  }

}
