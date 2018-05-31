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
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {

  selectedValue: any;
  questionNumber: any;
  questionData: any;
  surveyName: any;
  description: any;
  target: any;
  last_update = moment(Date.now()).format('l');

  questionTemp = [];
  questionType = [];
  surveyTemp = [];
  choiceTemp = [];
  keyTemp = [];
  questionKeyTemp = [];

  count = 0;
  surveyCount = 0;
  questionCount = 0;
  choiceCount = 0;
  question_Key: any;

  questionTypeList: any;
  surveyList: any;
  questionList: any;
  choiceList: any;

  // for edit data
  // question
  editQuestion: any;
  editKey: any;
  editsurveyId: any;
  editNumber: any;
  // choice
  public editChoice: Array<Object> = [];
  editChoiceId: any;
  editQuesiontId: any;
  deleteChoice = [];
  testtest = [];

  // for test new way
  myChoices = [];

  // delete question
  q_id: any;
  s_id: any;
  q_number: any;
  q_name: any;
  q_type: any;
  
  choice = [];

  constructor(private db: AngularFireDatabase, private router: Router,
    private firebaseService: FirebaseService, private formBuilder: FormBuilder, private ref: ChangeDetectorRef) {
    this.questionTypeList = this.firebaseService.getList('/question_type');
    this.surveyList = this.firebaseService.getList('/survey');
    this.questionList = this.firebaseService.getList('/question');
    this.choiceList = this.firebaseService.getList('/choice')
  }
  public choicesForm: FormGroup;

  public selectedTextbox = false;
  public selectedTextarea = false;
  public selectedOther = false;
  public selectedRating = false;

  ngOnInit() {
    this.questionNumber = 0;
    this.editChoice = [];

    this.choicesForm = this.formBuilder.group({
      question: '',
      questionType: '',
      choices: this.formBuilder.array([this.createChoice()])
    });

    // survey
    this.surveyList.subscribe(data => {
      data.forEach(tmp => {
        this.surveyTemp.push(tmp);
        // console.log(tmp);
      });
      for (var i = 0; i <= this.surveyTemp.length; i++) {
        this.surveyCount = i + 1;
      }
      // console.log("surveycount===" + this.surveyCount);
    });

    // question
    this.questionList.subscribe(data => {
      data.forEach(tmp => {
        this.questionTemp.push(tmp);
        this.keyTemp.push(tmp.key);
        if(tmp.survey_id == this.surveyCount){
          this.questionKeyTemp.push(tmp);
        }
        // console.log(tmp.question);
      });
      console.log(this.questionKeyTemp);

      // console.log("lenght==" + this.questionTemp.length);

      for (var i = 0; i <= this.questionTemp.length; i++) {
        this.questionCount = i + 1;
      }
      console.log("i==" + i);
      if (this.questionTemp.length != 0) {
        this.question_Key = parseInt(this.keyTemp[this.questionTemp.length - 1]) + 1;
      } else {
        this.question_Key = 1;
      }

      console.log("question_Key==" + this.question_Key);

      console.log("questionCount===" + this.questionCount);
    });

    // choice
    this.choiceList.subscribe(data => {
      this.choiceTemp = [];
      data.forEach(tmp => {
        this.choiceTemp.push(tmp);
      });
      console.log(this.choiceTemp);

    });
  }

  createChoice(): FormGroup {
    return this.formBuilder.group({
      choice: ''
    });
  }

  get choices(): FormArray {
    return this.choicesForm.get('choices') as FormArray;
  };

  addChoice(): void {
    this.choices.push(this.createChoice());
  }

  saveform() {
    // console.log(this.surveyName);
    // console.log(this.description);
    // console.log(this.target);
    // console.log(this.last_update);
    if (this.surveyName == undefined || this.description == undefined || this.target == undefined) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน")
    } else {
      const survey = {
        key: this.surveyCount,
        survey_name: this.surveyName,
        description: this.description,
        target: this.target,
        last_update: this.last_update
      }
      this.firebaseService.addData(survey, '/survey');

      this.surveyName = '';
      this.description = '';
      this.target = '';
      this.surveyTemp = [];
      this.surveyCount = 0;

      this.goToManageSurvey();
    }

  }

  saveData(formValue: any) {
    console.log(formValue);
    console.log(formValue.question);
    console.log(formValue.choices);

    const question = {
      key: this.question_Key,
      survey_id: this.surveyCount,
      number: this.questionNumber,
      question: formValue.question,
      question_type: this.selectedValue
    }
    this.firebaseService.addData(question, '/question');

    let i = 1;
    let j = 0;
    formValue.choices.forEach(tmp => {
      console.log(tmp.choice);
      console.log("i=" + i);
      if (tmp.choice != '') {
        const choice = {
          key: i.toString() + this.question_Key,
          choice_id: i,
          question_id: this.question_Key,
          choice: tmp.choice
        }
        this.firebaseService.addData(choice, '/choice');
        i = i + 1;
        j = j + 1;
      }

    })

    this.questionCount = 0;
    this.questionData = '';
    this.selectedValue = '';
    this.questionTemp = [];
    this.keyTemp = [];
    this.choicesForm.reset();
    const control = <FormArray>this.choicesForm.controls['choices'];
    for (let c = j; c > 0; c--) {
      control.removeAt(c);
      console.log(c);
    }
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

  setData() {
    this.questionNumber = this.questionNumber + 1;
  }

  setEditData(data) {
    console.log(data);
    console.log(this.choiceTemp);

    this.editKey = data.key;
    this.editQuestion = data.question;
    this.selectedValue = data.question_type;
    this.editsurveyId = data.survey_id;
    this.editNumber = data.number;
    this.editQuesiontId = data.key;
    for (let i = 0; i < this.choiceTemp.length; i++) {
      if (data.key == this.choiceTemp[i].question_id) {
        console.log("i=" + i);
        console.log(this.choiceTemp[i]);

        this.editChoiceId = parseInt(this.choiceTemp[i].choice_id);
        this.editQuesiontId = this.choiceTemp[i].question_id;
        const data = {
          key: this.choiceTemp[i].key,
          choice_id: this.choiceTemp[i].choice_id,
          question_id: this.choiceTemp[i].question_id,
          choice: this.choiceTemp[i].choice
        }
        this.editChoice.push(data);
      }
    }
    console.log(this.editChoice);

    this.ref.detectChanges();
  }

  editData() {
    // console.log("i==");
    // this.testtest.push(this.editChoice);
    console.log("heeeeeeeeeeeeeeeeeee");

    console.log(this.choiceTemp);
    console.log(this.editKey);
    console.log(this.editChoice);
    const data = {
      key: this.editKey,
      survey_id: this.editsurveyId,
      number: this.editNumber,
      question: this.editQuestion,
      question_type: this.selectedValue
    };
    // console.log(dataObj);
    this.firebaseService.editData(this.editKey, data, '/question');

    let j = 0;
    this.editChoice.forEach(tmp => {
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

    console.log(this.deleteChoice.length);
    if (this.deleteChoice.length > 0) {
      let count = this.deleteChoice.length;
      console.log("count=" + count);

      for (let i = 0; i < count; i++) {
        console.log("eeee");
        console.log(this.deleteChoice[i]);

        this.firebaseService.delData(this.deleteChoice[i], '/choice');
      }

    }
    this.questionCount = 0;
    this.questionData = '';
    this.selectedValue = '';
    this.questionTemp = [];
    this.keyTemp = [];
    // this.choiceTemp = [];
    this.editChoice = [];
    this.deleteChoice = [];
  }

  addEditChoice() {
    console.log(this.editChoiceId);
    if(this.editChoiceId == undefined || this.editChoiceId == NaN){
      this.editChoiceId = 1;
    }else{
      this.editChoiceId = this.editChoiceId + 1;
    }
    
    const data = {
      key: this.editChoiceId.toString() + this.editQuesiontId,
      choice_id: this.editChoiceId,
      question_id: this.editQuesiontId,
      choice: ''
    }
    this.editChoice.push(data);
    console.log(this.editChoice);
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
    this.editChoice = [];

    console.log(this.choiceTemp);

  }

  delEditChoice(index) {
    console.log(this.editChoice);
    console.log(this.editChoice[index]['choice_id']);
    console.log(this.editChoice[index]['question_id']);

    
      let choiceKey = this.editChoice[index]['choice_id'].toString() + this.editChoice[index]['question_id'].toString();
      console.log(choiceKey);
      let choiceIndex = this.choiceTemp.findIndex(item => item['key'] == parseInt(choiceKey));
      if(choiceIndex != -1){
        console.log(this.choiceTemp[choiceIndex]);
        this.deleteChoice.push(this.choiceTemp[choiceIndex]);
      }
      // this.firebaseService.delData(this.choiceTemp[choiceIndex],'/choice');
      this.editChoice.splice(index, 1);
      // this.choiceTemp.splice(choiceIndex,1);
      // this.choiceTemp = [];
      console.log(this.editChoice);
      console.log(this.choiceTemp);
      console.log(this.deleteChoice)
  }

  clearData(formValue: any) {
    console.log(formValue);
    let j = 0;
    formValue.choices.forEach(tmp => {
        j = j + 1;
    })
    this.editChoice = [];
    this.editQuestion = '';
    this.selectedValue = '';
    this.deleteChoice = [];
    this.questionCount = this.questionCount - 1;
    this.questionData = '';
    this.choicesForm.reset();
    const control = <FormArray>this.choicesForm.controls['choices'];
    for (let c = j; c > 0; c--) {
      control.removeAt(c);
      console.log(c);
    }

  }

  goToManageSurvey() {
    this.router.navigate(['/manage-survey']);
  }

  back(){
    this.questionKeyTemp.forEach(tmp => {
      for (let j = 0; j < this.choiceTemp.length; j++) {
      if (this.choiceTemp[j].question_id == tmp.key) {
        const choice = {
          key: this.choiceTemp[j].key
        }
        this.firebaseService.delData(choice, '/choice');
      }
    }
    this.firebaseService.delData(tmp, '/question'); 
    });
    this.goToManageSurvey()
  }
}
