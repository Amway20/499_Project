import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';

@Component({
  selector: 'app-manage-survey',
  templateUrl: './manage-survey.component.html',
  styleUrls: ['./manage-survey.component.css']
})
export class ManageSurveyComponent implements OnInit {

  basePath = "/survey";
  surveyList: any;
  questionList: any;
  choiceList: any;

  questionTemp = [];
  choiceTemp = [];

  // delete
  s_name: any;
  s_key: any;

  // check student
  public checkStudentTemp: Array<Object> = [];
  selectedSurvey: any;
  studentList: any;
  doSurveyList: any;
  doSurveyTemp = [];
  studentYear = [];
  yearSelected: any;
  searchData: any;
  studentKeyTemp = [];


  constructor(@Inject(FirebaseService) private db: AngularFireDatabase, private router: Router,
    private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.surveyList = this.firebaseService.getList(this.basePath);
    this.questionList = this.firebaseService.getList('/question');
    this.choiceList = this.firebaseService.getList('/choice');
    this.studentList = this.firebaseService.getList('/student');
    this.doSurveyList = this.firebaseService.getList('/do_survey');

    this.questionList.subscribe(data => {
      data.forEach(tmp => {
        this.questionTemp.push(tmp);
      });
    });

    this.choiceList.subscribe(data => {
      data.forEach(tmp => {
        this.choiceTemp.push(tmp);
      });
    });

    this.studentList.subscribe(data => {
      data.forEach(tmp => {
        this.studentKeyTemp.push(tmp.key);
      })
    })

    this.doSurveyList.subscribe(data => {
      data.forEach(tmp => {
        let x = tmp.target_id;
        if (this.studentKeyTemp.find(item => item == x)) {
          let y = x.toString();
          let year = '25' + y.substring(0, 2);
          if (this.studentYear.find(item => item == year)) {
          } else {
            this.studentYear.push(year);
          }
        }

      });
      console.log(this.studentYear);
    });
  }

  setData(data) {
    console.log(data);
    this.s_name = data.survey_name;
    this.s_key = data.key;
    console.log("name=" + this.s_key);
  }

  setCheckStudentData(selectedData) {
    this.selectedSurvey = selectedData.key;
    console.log(this.selectedSurvey);

  }

  checkStudentData(newValue) {
    console.log(this.yearSelected);

    this.doSurveyList.subscribe(data => {
      this.checkStudentTemp = [];
      this.doSurveyTemp = [];
      data.forEach(tmp => {
        if (tmp.survey_id == this.selectedSurvey) {
          this.doSurveyTemp.push(tmp);
        }
      });
      // console.log(this.doSurveyTemp);
      this.studentList.subscribe(data => {
        data.forEach(tmp => {
          let x = tmp.key;
          let y = x.toString();
          let year = '25' + y.substring(0, 2);
          if (year == this.yearSelected) {
            if (this.doSurveyTemp.find(item => item.target_id == tmp.key)) {
              const student = {
                key: tmp.key,
                student_firstname: tmp.student_firstname,
                student_lastname: tmp.student_lastname,
                status: 'yes'
              }
              this.checkStudentTemp.push(student);
            } else {
              const student = {
                key: tmp.key,
                student_firstname: tmp.student_firstname,
                student_lastname: tmp.student_lastname,
                status: 'no'
              }
              this.checkStudentTemp.push(student);
            }
          }

        })
        // console.log(this.checkStudentTemp);
      })
    });
  }

  deleteData() {
    console.log(this.s_key);
    const survey = {
      key: this.s_key
    }
    this.firebaseService.delData(survey, this.basePath);

    for (let i = 0; i < this.questionTemp.length; i++) {
      if (this.questionTemp[i].survey_id == this.s_key) {
        console.log("survey_id" + this.questionTemp[i].key);
        for (let j = 0; j < this.choiceTemp.length; j++) {
          if (this.choiceTemp[j].question_id == this.questionTemp[i].key) {
            const choice = {
              key: this.choiceTemp[j].key
            }
            this.firebaseService.delData(choice, '/choice');
          }
        }
        const question = {
          key: this.questionTemp[i].key
        }
        this.firebaseService.delData(question, '/question');
      }
    }
  }

  gotoEditSurvey(data) {
    localStorage.setItem('survey_key', data.key);
    this.router.navigate(['/edit-survey']);
  }

  clearData() {
    this.doSurveyTemp = [];
    this.checkStudentTemp = [];
    this.yearSelected = '';
  }
}