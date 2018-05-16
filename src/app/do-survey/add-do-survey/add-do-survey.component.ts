import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FirebaseService } from '../../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-add-do-survey',
  templateUrl: './add-do-survey.component.html',
  styleUrls: ['./add-do-survey.component.css']
})
export class AddDoSurveyComponent implements OnInit {

  choiceListData: any;
  survey_key: any;
  targetID: any;

  surveyList: any;
  questionList: any;
  choiceList: any;
  answerList: any;
  doSurveyList: any;
  subjectList: any;
  companyList: any;
  studentList: any;


  answerTemp = [];
  answerCount: any;
  doSurveyTemp = [];
  companyCount = 1;
  otherAnswer = [];
  radioTemp = [];

  questions = [];
  answers = [];
  checkbox = [];
  choices = [];
  subjectTemp = [];
  public allAnswer: Array<Object> = [];

  date = moment(Date.now()).format('L');
  answer_id: any;
  do_survey_id: any;
  question_id: any;

  // subject
  selectedSubject = [];
  addNewSubject: any;
  public subjectAnswer: Array<Object> = [];
  subjectMajor = [];
  subjectOther = [];
  subjectId: any;
  subjectName: any;
  subjectType: any;

  constructor(private router: Router, private firebaseService: FirebaseService,
    private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.targetID = localStorage.getItem("key");
    this.survey_key = localStorage.getItem("survey_key");

    this.surveyList = this.firebaseService.getList('/survey');
    this.questionList = this.firebaseService.getList('/question');
    this.choiceList = this.firebaseService.getList('/choice');
    this.answerList = this.firebaseService.getList('/answer');
    this.doSurveyList = this.firebaseService.getList('/do_survey');
    this.subjectList = this.firebaseService.getList('/subject');
    this.companyList = this.firebaseService.getList('/company');
    this.studentList = this.firebaseService.getList('/student');

    this.question_id = 1;

    // question
    let index = 0;
    this.questionList.subscribe(data => {
      data.forEach(tmp => {
        if (tmp.survey_id == this.survey_key) {
          this.questions.push(tmp);
          index = index + 1;

          const data = {
            question_id: tmp.key,
            answer: ''
          }
          this.allAnswer.push(data);
        }
      });
      console.log(this.questions);
    });

    // answer
    this.answerList.subscribe(data => {
      data.forEach(tmp => {
        this.answerTemp.push(tmp);
      });
      this.answerCount = this.answerTemp.length;
    });

    // student
    this.studentList.subscribe(data => {
      if (this.survey_key == 1 || this.survey_key == 2) {
        data.forEach(tmp => {
          if (tmp.key == this.targetID) {
            this.allAnswer[0]['answer'] = tmp.student_firstname + ' ' + tmp.student_lastname; 
            this.allAnswer[1]['answer'] = tmp.key;
          }
        });
      }

    });

    // do_survey
    this.doSurveyList.subscribe(data => {
      data.forEach(tmp => {
        this.doSurveyTemp.push(tmp);
      });
    });

    // subject
    this.subjectList.subscribe(data => {
      data.forEach(tmp => {
        this.subjectTemp.push(tmp);
        if (tmp.subject_type == 'กระบวนวิชาเอก') {
          this.subjectMajor.push(tmp);
        } else {
          this.subjectOther.push(tmp);
        }
      });
    });

    // company
    this.companyList.subscribe(data => {
      data.forEach(tmp => {
        this.companyCount = this.companyCount + 1;
      });
      console.log("companyCount==" + this.companyCount);

    });
  }

  back() {
    localStorage.removeItem("survey_key");
    this.router.navigate(['/do-survey']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  savedata() {
    console.log(this.answers);
    console.log(this.allAnswer);

    if (this.answerTemp.length == 0) {
      this.answer_id = 1;
    } else {
      this.answer_id = this.answerTemp.length + 1;
    }

    if (this.doSurveyTemp.length == 0) {
      this.do_survey_id = 1;
    } else {
      this.do_survey_id = this.doSurveyTemp.length + 1;
    }
    console.log("answer_id=" + this.answer_id);
    console.log("do_survey_id=" + this.do_survey_id);
    console.log("survey_id=" + this.survey_key);
    console.log("target_id" + this.targetID);
    console.log("date=" + this.date);

    console.log(this.questions);

    // save answer
    let i = 0;
    this.allAnswer.forEach(tmp => {
      // console.log(tmp);
      if (tmp['question_id'] == 10 || tmp['question_id'] == 11 || tmp['question_id'] == 12 || tmp['question_id'] == 13 || tmp['question_id'] == 14) {
        let index = this.subjectAnswer.findIndex(item => item['question_id'] == tmp['question_id']);
        const answer = {
          key: this.answer_id,
          question_id: tmp['question_id'],
          do_survey_id: this.do_survey_id,
          answer: this.subjectAnswer[index]['subject_id'] + tmp['answer']
        }
        console.log(answer);
        this.firebaseService.addData(answer, '/answer');

      } else {
        const answer = {
          key: this.answer_id,
          question_id: tmp['question_id'],
          do_survey_id: this.do_survey_id,
          answer: tmp['answer']
        }
        console.log(answer);
        this.firebaseService.addData(answer, '/answer');

      }

      if (tmp['question_id'] == 30) {
        const company = {
          key: this.companyCount,
          company_name: tmp['answer']
        }
        this.firebaseService.addData(company, '/company');
        this.targetID = this.companyCount;
      }
      this.answer_id = this.answer_id + 1;
    });

    // save do survey
    const do_survey = {
      key: this.do_survey_id,
      survey_id: this.survey_key,
      target_id: this.targetID,
      status: "yes",
      date: this.date
    }
    console.log(do_survey);
    this.firebaseService.addData(do_survey, '/do_survey');

    // reset value
    this.companyCount = 1;

    this.back();
  }

  saveCheckbox(value, i, j) {
    console.log("i==" + i);
    console.log("j==" + j);
    console.log(value);
    console.log(this.checkbox[j]);

    if (this.checkbox[j] == true) {
      if (this.allAnswer[i]['answer'] == '') {
        this.allAnswer[i] = value;
      } else {
        let tmp = this.allAnswer[i]['answer'];
        console.log(tmp);
        this.allAnswer[i]['answer'] = tmp + ',' + value;
      }
    } else {
      let c = this.allAnswer.filter(item => item == value)
      console.log(c);

    }
    console.log(this.allAnswer);

  }

  async listChoices(i) {
    console.log(i);
    console.log(this.questions[i].key);
    await this.setEmpty();
    await this.choiceList.subscribe(data => {
      data.forEach(tmp => {
        if (tmp.question_id == this.questions[i].key) {
          this.choices.push(tmp);
        }
      });

    });

    await console.log(this.choices);
  }

  setEmpty() {
    this.choices = [];
    console.log("finish");

  }

  public onChange(newValue, question_key) {
    if (this.subjectAnswer.find(item => item['question_id'] == question_key)) {
      let index = this.subjectAnswer.findIndex(item => item['question_id'] == question_key);
      this.subjectAnswer[index]['subject_id'] = this.selectedSubject[question_key];
      console.log("hehe" + this.subjectAnswer[index]['subject_id']);

    } else {
      const data = {
        question_id: question_key,
        subject_id: this.selectedSubject[question_key]
      }
      this.subjectAnswer.push(data);
      console.log(this.subjectAnswer);
    }
  }

  saveMajorSubject() {
    console.log(this.subjectId);
    console.log(this.subjectName);
    console.log(this.subjectType);

    const data = {
      key: this.subjectId,
      subject_name: this.subjectName,
      subject_type: 'กระบวนวิชาเอก'
    }
    this.subjectMajor = [];
    this.subjectId = '';
    this.subjectName = '';

    this.firebaseService.addData(data, '/subject');
  }

  saveOtherSubject() {
    console.log(this.subjectId);
    console.log(this.subjectName);
    console.log(this.subjectType);

    const data = {
      key: this.subjectId,
      subject_name: this.subjectName,
      subject_type: 'กระบวนวิชาพื้นฐานสังคมฯ-มนุษย์ฯ'
    }
    this.subjectId = '';
    this.subjectName = '';
    this.subjectOther = [];

    this.firebaseService.addData(data, '/subject');

  }

  radioCheckValue(newValue, i) {
    console.log(newValue);
    console.log(i);

    if (newValue == 'อื่นๆ โปรดระบุ' || newValue == 'อื่นๆ') {
      this.otherAnswer[i] = true;
      this.allAnswer[i]['answer'] = '';
    } else {
      this.otherAnswer[i] = false;
      this.allAnswer[i]['answer'] = newValue;
    }
    console.log(this.allAnswer[i]['answer']);
  }

}
