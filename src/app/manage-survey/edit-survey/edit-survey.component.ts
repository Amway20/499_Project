import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FirebaseService } from '../../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.css']
})
export class EditSurveyComponent implements OnInit {

  survey_key: any;
  surveyList: any;
  questionList: any;
  choiceList: any;
  questionTypeList: any;
  questionData: any;
  last_update = moment(Date.now()).format('l');

  surveyName: any;
  description: any;
  target: any;

  choiceTemp = [];
  myChoice = [];
  questionTemp = [];
  keyTemp = [];

  // count
  surveyCount = 0;
  questionCount = 0;
  choiceCount = 0;
  questionNumber: any;
  question_Key: any;

  public editChoice: Array<Object> = [];
  public addChoiceTemp: Array<Object> = [];

  selectedValue: any;
  public selectedTextbox = false;
  public selectedTextarea = false;
  public selectedOther = false;
  public selectedRating = false;

  // for edit data
  // question
  editQuestion: any;
  editKey: any;
  editsurveyId: any;
  editNumber: any;
  editQuesiontId: any;
  // choice
  public editSelectedChoice: Array<Object> = [];
  editSelcetedChoiceId: any;
  editSelectedQuesiontId: any;
  deleteSelectedChoice = [];
  testtest = [];

  // delete question
  q_id: any;
  s_id: any;
  q_number: any;
  q_name: any;
  q_type: any;


  constructor(private db: AngularFireDatabase, private router: Router,
    private firebaseService: FirebaseService, private formBuilder: FormBuilder, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.survey_key = localStorage.getItem("survey_key");
    this.surveyList = this.firebaseService.getList('/survey');
    this.questionList = this.firebaseService.getList('/question');
    this.choiceList = this.firebaseService.getList('/choice')
    this.questionTypeList = this.firebaseService.getList('/question_type');

    const choiceData = {
      choice: ''
    }
    this.addChoiceTemp.push(choiceData);

    this.surveyList.subscribe(survey => {
      survey.forEach(tmp => {
        if (tmp.key == this.survey_key) {
          this.surveyName = tmp.survey_name
          this.description = tmp.description
          this.target = tmp.target
        }
        this.surveyCount = this.surveyCount + 1;
      });
    });

    this.choiceList.subscribe(choice => {
      this.choiceTemp = [];
      choice.forEach(tmp => {
        this.choiceTemp.push(tmp);
      });
      this.choiceCount = this.choiceCount + 1;
    });

    this.questionList.subscribe(question => {
      question.forEach(tmp => {
        this.questionTemp.push(tmp);
        this.keyTemp.push(tmp.key);
        if (tmp.survey_id == this.survey_key) {
          console.log(tmp.question);
          this.choiceTemp.forEach(choice => {
            if (choice.question_id == tmp.key) {
              this.myChoice.push(choice);
            }
          })
          this.questionCount = this.questionCount + 1;
        }
        this.questionNumber = this.questionCount;

        if (this.questionTemp.length != 0) {
          this.question_Key = parseInt(this.keyTemp[this.questionTemp.length - 1]) + 1;
        } else {
          this.question_Key = 1;
        }
      });
    });
    console.log(this.choiceTemp);

  }

  setData() {
    this.questionNumber = this.questionNumber + 1;
  }

  public onChange(newValue) {
    console.log(newValue);
    if (this.selectedValue == 1) {
      this.selectedTextbox = true;
      this.selectedTextarea = false;
      this.selectedOther = false;
      this.selectedRating = false;
    } else if (this.selectedValue == 2) {
      this.selectedTextbox = false;
      this.selectedTextarea = true;
      this.selectedOther = false;
      this.selectedRating = false;
    } else if (this.selectedValue == 6) {
      this.selectedTextbox = false;
      this.selectedTextarea = false;
      this.selectedOther = false;
      this.selectedRating = true;
    } else if (this.selectedValue == 7 || this.selectedValue == 8 || this.selectedValue == 9) {
      this.selectedTextbox = false;
      this.selectedTextarea = false;
      this.selectedOther = false;
      this.selectedRating = false;
    } else {
      this.selectedTextbox = false;
      this.selectedTextarea = false;
      this.selectedOther = true;
      this.selectedRating = false;
    }
  }

  addChoice() {
    const data = {
      choice: ''
    }
    this.addChoiceTemp.push(data);
  }

  clearData() {
    this.addChoiceTemp = [];
    this.selectedValue = '';
    this.questionCount = this.questionCount - 1;
    this.editSelectedChoice = [];
    this.editSelcetedChoiceId = 0;
  }

  saveData() {
    console.log("key" + this.question_Key);
    console.log("survey_id" + this.surveyCount);
    console.log("number" + this.questionNumber);
    console.log("question" + this.questionData);
    console.log("question_type" + this.selectedValue);
    console.log(this.addChoiceTemp);

    const question = {
      key: this.question_Key,
      survey_id: this.surveyCount,
      number: this.questionNumber,
      question: this.questionData,
      question_type: this.selectedValue
    }
    this.firebaseService.addData(question, '/question');

    let i = 1;
    this.addChoiceTemp.forEach(tmp => {
      console.log(tmp['choice']);
      const choice = {
        key: i.toString() + this.question_Key,
        choice_id: i,
        question_id: this.question_Key,
        choice: tmp['choice']
      }
      this.firebaseService.addData(choice, '/choice');
      i = i + 1;
    });

    this.questionCount = 0;
    this.questionData = '';
    this.selectedValue = '';
    this.questionTemp = [];
    this.keyTemp = [];
    this.addChoiceTemp = [{ choice: '' }];
    this.myChoice = [];
  }

  setDelQuestion(data) {
    this.q_id = data.key;
    this.s_id = data.survey_id;
    this.q_number = data.number;
    this.q_name = data.question;
    this.q_type = data.question_type;
  }

  delData() {
    for (var i = 0; i < this.choiceTemp.length; i++) {
      if (this.q_id == this.choiceTemp[i].question_id) {
        this.firebaseService.delData(this.choiceTemp[i], '/choice');
      }
    }
    const data = {
      key: this.q_id,
      survey_id: this.s_id,
      number: this.q_number,
      question: this.q_name,
      question_type: this.q_type
    }
    this.firebaseService.delData(data, '/question');


    this.questionCount = 0;
    this.questionTemp = [];
    this.keyTemp = [];
    this.choiceTemp = [];
    this.addChoiceTemp = [{ choice: '' }];
    this.questionData = '';
    this.selectedValue = '';
    this.questionCount = this.questionCount - 1;
  }

  setEditData(data) {
    console.log(data);
    console.log(this.choiceTemp);

    this.editKey = data.key;
    this.editQuestion = data.question;
    this.selectedValue = data.question_type;
    this.editsurveyId = data.survey_id;
    this.editNumber = data.number;
    this.editSelectedQuesiontId = data.key;
    for (let i = 0; i < this.choiceTemp.length; i++) {
      if (data.key == this.choiceTemp[i].question_id) {
        console.log("i=" + i);
        console.log(this.choiceTemp[i]);

        this.editSelcetedChoiceId = parseInt(this.choiceTemp[i].choice_id);
        this.editSelectedQuesiontId = this.choiceTemp[i].question_id;
        const data = {
          key: this.choiceTemp[i].key,
          choice_id: this.choiceTemp[i].choice_id,
          question_id: this.choiceTemp[i].question_id,
          choice: this.choiceTemp[i].choice
        }
        this.editSelectedChoice.push(data);
      }
    }
    console.log(this.editSelectedChoice);

    if (this.selectedValue == 1) {
      this.selectedTextbox = true;
      this.selectedTextarea = false;
      this.selectedOther = false;
      this.selectedRating = false;
    } else if (this.selectedValue == 2) {
      this.selectedTextbox = false;
      this.selectedTextarea = true;
      this.selectedOther = false;
      this.selectedRating = false;
    } else if (this.selectedValue == 6) {
      this.selectedTextbox = false;
      this.selectedTextarea = false;
      this.selectedOther = false;
      this.selectedRating = true;
    } else if (this.selectedValue == 7) {
      this.selectedTextbox = false;
      this.selectedTextarea = false;
      this.selectedOther = false;
      this.selectedRating = false;
    } else {
      this.selectedTextbox = false;
      this.selectedTextarea = false;
      this.selectedOther = true;
      this.selectedRating = false;
    }

    this.ref.detectChanges();
  }

  addEditChoice() {
    console.log(this.editSelcetedChoiceId);
    if (this.editSelcetedChoiceId == NaN || this.editSelcetedChoiceId == undefined) {
      this.editSelcetedChoiceId = 1;
    } else {
      this.editSelcetedChoiceId = this.editSelcetedChoiceId + 1;
    }

    const data = {
      key: this.editSelcetedChoiceId.toString() + this.editSelectedQuesiontId,
      choice_id: this.editSelcetedChoiceId,
      question_id: this.editSelectedQuesiontId,
      choice: ''
    }
    this.editSelectedChoice.push(data);
    console.log(this.editSelectedChoice);
  }

  delEditChoice(index) {
    console.log(this.editSelectedChoice);
    console.log(this.editSelectedChoice[index]['choice_id']);
    console.log(this.editSelectedChoice[index]['question_id']);

    let choiceKey = this.editSelectedChoice[index]['choice_id'].toString() + this.editSelectedChoice[index]['question_id'].toString();
    console.log(choiceKey);
    let choiceIndex = this.choiceTemp.findIndex(item => item['key'] == parseInt(choiceKey));
    if (choiceIndex != -1) {
      console.log(this.choiceTemp[choiceIndex]);
      this.deleteSelectedChoice.push(this.choiceTemp[choiceIndex]);
    }
    this.editSelectedChoice.splice(index, 1);

    console.log(this.editSelectedChoice);
    console.log(this.choiceTemp);
    console.log(this.deleteSelectedChoice)
  }

  editData() {
    console.log(this.choiceTemp.length);
    console.log(this.editKey);
    console.log(this.editSelectedChoice);
    const data = {
      key: this.editKey,
      survey_id: this.editsurveyId,
      number: this.editNumber,
      question: this.editQuestion,
      question_type: this.selectedValue
    };
    this.firebaseService.editData(this.editKey, data, '/question');


    let j = 0;
    this.editSelectedChoice.forEach(tmp => {
      console.log(tmp['choice']);
      const choice = {
        key: tmp['key'],
        choice_id: tmp['choice_id'],
        question_id: tmp['question_id'],
        choice: tmp['choice']
      }
      this.firebaseService.editData(tmp['key'], choice, '/choice');
      j = j + 1;

    })



    if (this.deleteSelectedChoice.length > 0) {
      let count = this.deleteSelectedChoice.length;
      console.log("count=" + count);
      for (let i = 0; i < count; i++) {
        console.log("eeee");
        console.log(this.deleteSelectedChoice[i]);
        this.firebaseService.delData(this.deleteSelectedChoice[i], '/choice');
        this.choiceTemp = [];
      }
    }

    this.questionCount = 0;
    this.questionData = '';
    this.selectedValue = '';
    this.questionTemp = [];
    this.keyTemp = [];
    // this.choiceTemp = [];
    this.editSelectedChoice = [];
    this.deleteSelectedChoice = [];
    this.editSelcetedChoiceId = 0;

    console.log(this.editSelectedChoice);
  }

  saveform() {
    const survey = {
      key: this.survey_key,
      survey_name: this.surveyName,
      description: this.description,
      target: this.target,
      last_update: this.last_update
    }
    this.firebaseService.editData(this.survey_key, survey, '/survey');

    this.surveyName = '';
    this.description = '';
    this.target = '';
    this.surveyCount = 0;

    this.goToManageSurvey();
  }

  goToManageSurvey() {
    this.router.navigate(['/manage-survey']);
  }
}
