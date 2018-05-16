import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../service/firebase-service.service';
import { ExcelService } from '../service/excel.service';
import { Injectable, Inject } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public subjectReport: Array<Object> = [];

  answerList: any;
  questionList: any;
  doSurveyList: any;
  studentList: any;

  questionTemp = [];
  answerTemp = [];
  answers = [];
  doSurveyTemp = [];

  radioValue: any;
  studentIdDropDown: any;
  yearDropDown: any;
  yearType1 = ['ดูรายงานตามปีการศึกษา', 'ดูรายงานตามปีที่กรอก', 'ดูทั้งหมด'];
  yearType2 = ['ดูรายงานตามปีที่กรอก', 'ดูทั้งหมด'];
  targetId: any;
  yearDoSurvey: any;
  studentTemp = [];
  yeartemp = [];
  studentIdTemp = [];
  surveyKey: any;
  selectedYear: any;
  yearTmp: any;

  header: any;

  public subjectExcel: Array<Object> = [];
  public workExcel: Array<Object> = [];
  public companyExcel: Array<Object> = [];

  constructor(@Inject(FirebaseService) private db: AngularFireDatabase, private router: Router,
    private firebaseService: FirebaseService, private excelService: ExcelService) { }

  ngOnInit() {
    this.answerList = this.firebaseService.getList('/answer');
    this.questionList = this.firebaseService.getList('/question');
    this.doSurveyList = this.firebaseService.getList('/do_survey');
    this.studentList = this.firebaseService.getList('/student');

    this.studentList.subscribe(data => {
      data.forEach(element => {
        this.studentTemp.push(element.key);
      });
    })

    this.doSurveyList.subscribe(data => {
      data.forEach(tmp => {
        this.doSurveyTemp.push(tmp);
        this.targetId = tmp.target_id;
        if (this.studentTemp.find(item => item == this.targetId)) {
          let x = this.targetId.toString();
          console.log(x.substring(0, 2));
          let studentYear = '25' + x.substring(0, 2);
          // if (this.yeartemp.find(item => item == year)) {
          // } else {
          //   this.yeartemp.push(year);
          // }

          if (this.studentIdTemp.find(item => item == studentYear)) {
          } else {
            this.studentIdTemp.push(studentYear);
          }
        }
        this.yearDoSurvey = tmp.date;
        let a = this.yearDoSurvey.toString();
        let year = parseInt(a.substring(6, 10)) + 543;
        if (this.yeartemp.find(item => item == year)) {
        } else {
          this.yeartemp.push(year);
        }
      });
      console.log(this.yeartemp);
    })

    this.questionList.subscribe(data => {
      data.forEach(element => {
        this.questionTemp.push(element.question);
      });
      // console.log(this.questionTemp);

      // const subjectQuestion = {
      //   question1: this.questionTemp[0],
      //   question2: this.questionTemp[1],
      //   question3: this.questionTemp[2],
      //   question4: this.questionTemp[3],
      //   question5: this.questionTemp[4],
      //   question6: this.questionTemp[5],
      //   question7: this.questionTemp[6],
      //   question8: this.questionTemp[7],
      //   question9: this.questionTemp[8],
      //   question10: this.questionTemp[9],
      //   question11: this.questionTemp[10],
      //   question12: this.questionTemp[11],
      //   question13: this.questionTemp[12],
      //   question14: this.questionTemp[13],
      //   question15: this.questionTemp[14],
      //   question16: this.questionTemp[15],
      //   question17: this.questionTemp[16],
      //   question18: this.questionTemp[17],
      //   question19: this.questionTemp[18],
      //   question20: this.questionTemp[19],
      //   question21: this.questionTemp[20],
      //   date: 'วันที่ทำแบบสอบถาม'
      // }
      // this.subjectExcel.push(subjectQuestion);

      // const companyQuestion = {
      //   question1: this.questionTemp[29],
      //   question2: this.questionTemp[30],
      //   question3: this.questionTemp[31],
      //   question4: this.questionTemp[32],
      //   question5: this.questionTemp[33],
      //   question6: this.questionTemp[34],
      //   question7: this.questionTemp[37],
      //   question8: this.questionTemp[38],
      //   question9: this.questionTemp[39],
      //   question10: this.questionTemp[40],
      //   question11: this.questionTemp[42],
      //   question12: this.questionTemp[43],
      //   question13: this.questionTemp[44],
      //   question14: this.questionTemp[45],
      //   question15: this.questionTemp[47],
      //   question16: this.questionTemp[48],
      //   question17: this.questionTemp[49],
      //   question18: this.questionTemp[51],
      //   question19: this.questionTemp[52],
      //   question20: this.questionTemp[53],
      //   question21: this.questionTemp[54],
      //   question22: this.questionTemp[55],
      //   question23: this.questionTemp[57],
      //   question24: this.questionTemp[58],
      //   question25: this.questionTemp[59],
      //   question26: this.questionTemp[61],
      //   question27: this.questionTemp[62],
      //   question28: this.questionTemp[64],
      //   question29: this.questionTemp[65],
      //   question30: this.questionTemp[67],
      //   question31: this.questionTemp[68],
      //   question32: this.questionTemp[69],
      //   question33: this.questionTemp[70],
      //   date: 'วันที่ทำแบบสอบถาม'
      // }
      // this.companyExcel.push(companyQuestion);
    });

    // this.answerList.subscribe(data => {
    //   data.forEach(element => {
    //     this.answers.push(element);
    //   });
    // });
  }

  subjectExport() {
    this.doSurveyList.subscribe(data => {
      if (this.radioValue == 'ดูรายงานตามปีการศึกษา') {
        const head = {
          question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร ' + 'ปีการศึกษา ' + this.selectedYear.toString()
        }
        this.subjectExcel.push(head);
      } else if (this.radioValue == 'ดูรายงานตามปีที่กรอก') {
        const head = {
          question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร ' + 'ประจำปี ' + this.selectedYear.toString()
        }
        this.subjectExcel.push(head);
      } else {
        const head = {
          question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร รวมทั้งหมด'
        }
        this.subjectExcel.push(head);
      }

      // this.header = 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร ' + 'ประจำปี ' + this.selectedYear.toString();


      const subjectQuestion = {
        question1: this.questionTemp[0],
        question2: this.questionTemp[1],
        question3: this.questionTemp[2],
        question4: this.questionTemp[3],
        question5: this.questionTemp[4],
        question6: this.questionTemp[5],
        question7: this.questionTemp[6],
        question8: this.questionTemp[7],
        question9: this.questionTemp[8],
        question10: this.questionTemp[9],
        question11: this.questionTemp[10],
        question12: this.questionTemp[11],
        question13: this.questionTemp[12],
        question14: this.questionTemp[13],
        question15: this.questionTemp[14],
        question16: this.questionTemp[15],
        question17: this.questionTemp[16],
        question18: this.questionTemp[17],
        question19: this.questionTemp[18],
        question20: this.questionTemp[19],
        question21: this.questionTemp[20],
        date: 'วันที่ทำแบบสอบถาม'
      }
      this.subjectExcel.push(subjectQuestion);

      data.forEach(tmp => {
        this.answerTemp = [];
        if (this.radioValue == 'ดูรายงานตามปีการศึกษา') {
          let x = tmp.target_id.toString();
          let year = '25' + x.substring(0, 2);
          this.yearTmp = year;
        } else if (this.radioValue == 'ดูรายงานตามปีที่กรอก') {
          let x = tmp.date.toString();
          let year = parseInt(x.substring(6, 10)) + 543;
          this.yearTmp = year;
        } else {
          this.yearTmp = undefined;
        }
        if (this.yearTmp == this.selectedYear) {
          for (let i = 0; i < this.answers.length; i++) {
            if (this.answers[i].do_survey_id == tmp.key) {
              if (tmp.survey_id == '1') {
                this.answerTemp.push(this.answers[i].answer);
              }
            }
          }
          this.answerTemp.push(tmp.date);
          // console.log(this.answerTemp);
          if (tmp.survey_id == '1') {
            const answer = {
              question1: this.answerTemp[0],
              question2: this.answerTemp[1],
              question3: this.answerTemp[2],
              question4: this.answerTemp[3],
              question5: this.answerTemp[4],
              question6: this.answerTemp[5],
              question7: this.answerTemp[6],
              question8: this.answerTemp[7],
              question9: this.answerTemp[8],
              question10: this.answerTemp[9],
              question11: this.answerTemp[10],
              question12: this.answerTemp[11],
              question13: this.answerTemp[12],
              question14: this.answerTemp[13],
              question15: this.answerTemp[14],
              question16: this.answerTemp[15],
              question17: this.answerTemp[16],
              question18: this.answerTemp[17],
              question19: this.answerTemp[18],
              question20: this.answerTemp[19],
              question21: this.answerTemp[20],
              date: this.answerTemp[21]
            }
            // console.log(answer);
            this.subjectExcel.push(answer);
          }
        }
      });
      // console.log(this.subjectExcel);

      this.excelService.exportAsExcelFile(this.subjectExcel, 'subject');
      this.subjectExcel = [];
      this.radioValue = '';
      this.selectedYear = '';
      this.studentIdDropDown = false;
      this.yearDropDown = false;

    });
  }

  workExport() {
    this.doSurveyList.subscribe(data => {
      if (this.radioValue == 'ดูรายงานตามปีการศึกษา') {
        const head = {
          question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร ' + 'ปีการศึกษา ' + this.selectedYear.toString()
        }
        this.subjectExcel.push(head);
      } else if (this.radioValue == 'ดูรายงานตามปีที่กรอก') {
        const head = {
          question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร ' + 'ประจำปี ' + this.selectedYear.toString()
        }
        this.subjectExcel.push(head);
      } else {
        const head = {
          question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร รวมทั้งหมด'
        }
        this.subjectExcel.push(head);
      }

      const workQuestion = {
        question1: this.questionTemp[21],
        question2: this.questionTemp[22],
        question3: this.questionTemp[23],
        question4: this.questionTemp[24],
        question5: this.questionTemp[25],
        question6: this.questionTemp[26],
        question7: this.questionTemp[27],
        date: 'วันที่ทำแบบสอบถาม'
      }
      this.workExcel.push(workQuestion);

      data.forEach(tmp => {
        this.answerTemp = [];
        if (this.radioValue == 'ดูรายงานตามปีการศึกษา') {
          let x = tmp.target_id.toString();
          let year = '25' + x.substring(0, 2);
          this.yearTmp = year;
        } else if (this.radioValue == 'ดูรายงานตามปีที่กรอก') {
          let x = tmp.date.toString();
          let year = parseInt(x.substring(6, 10)) + 543;
          this.yearTmp = year;
        } else {
          this.yearTmp = undefined;
        }
        if (this.yearTmp == this.selectedYear) {
          for (let i = 0; i < this.answers.length; i++) {
            if (this.answers[i].do_survey_id == tmp.key) {
              if (tmp.survey_id == '2') {
                this.answerTemp.push(this.answers[i].answer);
              }
            }
          }
          this.answerTemp.push(tmp.date);
          // for (let i = 0; i < this.answers.length; i++) {
          //   if (this.answers[i].do_survey_id == tmp.key) {
          //     if (tmp.survey_id == '2') {
          //       this.answerTemp.push(this.answers[i].answer);
          //     }

          //   }
          // }
          // console.log(this.answerTemp);
          if (tmp.survey_id == '2') {
            const answer = {
              question1: this.answerTemp[0],
              question2: this.answerTemp[1],
              question3: this.answerTemp[2],
              question4: this.answerTemp[3],
              question5: this.answerTemp[4],
              question6: this.answerTemp[5],
              question7: this.answerTemp[6],
              date: this.answerTemp[7]
            }
            // console.log(answer);
            this.workExcel.push(answer);
          }
        }
      });
      // console.log(this.subjectExcel);

      this.excelService.exportAsExcelFile(this.workExcel, 'work');
      this.workExcel = [];
      this.radioValue = '';
      this.selectedYear = '';
      this.studentIdDropDown = false;
      this.yearDropDown = false;
    });
  }

  companyExport() {
    this.doSurveyList.subscribe(data => {
      if (this.radioValue == 'ดูรายงานตามปีที่กรอก') {
        const head = {
          question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร ' + 'ประจำปี ' + this.selectedYear.toString()
        }
        this.subjectExcel.push(head);
      } else {
        const head = {
          question1: 'แบบสอบถามความคิดเห็นของบัณฑิตต่อคุณภาพหลักสูตร รวมทั้งหมด'
        }
        this.subjectExcel.push(head);
      }

      const companyQuestion = {
        question1: this.questionTemp[29],
        question2: this.questionTemp[30],
        question3: this.questionTemp[31],
        question4: this.questionTemp[32],
        question5: this.questionTemp[33],
        question6: this.questionTemp[34],
        question7: this.questionTemp[37],
        question8: this.questionTemp[38],
        question9: this.questionTemp[39],
        question10: this.questionTemp[40],
        question11: this.questionTemp[42],
        question12: this.questionTemp[43],
        question13: this.questionTemp[44],
        question14: this.questionTemp[45],
        question15: this.questionTemp[47],
        question16: this.questionTemp[48],
        question17: this.questionTemp[49],
        question18: this.questionTemp[51],
        question19: this.questionTemp[52],
        question20: this.questionTemp[53],
        question21: this.questionTemp[54],
        question22: this.questionTemp[55],
        question23: this.questionTemp[57],
        question24: this.questionTemp[58],
        question25: this.questionTemp[59],
        question26: this.questionTemp[61],
        question27: this.questionTemp[62],
        question28: this.questionTemp[64],
        question29: this.questionTemp[65],
        question30: this.questionTemp[67],
        question31: this.questionTemp[68],
        question32: this.questionTemp[69],
        question33: this.questionTemp[70],
        date: 'วันที่ทำแบบสอบถาม'
      }
      this.companyExcel.push(companyQuestion);

      data.forEach(tmp => {
        this.answerTemp = [];
        console.log(this.selectedYear);

        if (this.radioValue == 'ดูรายงานตามปีที่กรอก') {
          let x = tmp.date.toString();
          let year = parseInt(x.substring(6, 10)) + 543;
          this.yearTmp = year;
        } else {
          this.yearTmp = undefined;
        }
        if (this.yearTmp == this.selectedYear) {
          for (let i = 0; i < this.answers.length; i++) {
            if (this.answers[i].do_survey_id == tmp.key) {
              if (tmp.survey_id == '3') {
                this.answerTemp.push(this.answers[i].answer);
              }
            }
          }
          this.answerTemp.push(tmp.date);
          // for (let i = 0; i < this.answers.length; i++) {
          //   if (this.answers[i].do_survey_id == tmp.key) {
          //     if (tmp.survey_id == '3') {
          //       this.answerTemp.push(this.answers[i].answer);
          //     }

          //   }
          // }
          console.log(this.answerTemp);
          if (tmp.survey_id == '3') {
            const answer = {
              question1: this.answerTemp[1],
              question2: this.answerTemp[2],
              question3: this.answerTemp[3],
              question4: this.answerTemp[4],
              question5: this.answerTemp[5],
              question6: this.answerTemp[6],
              question7: this.answerTemp[9],
              question8: this.answerTemp[10],
              question9: this.answerTemp[11],
              question10: this.answerTemp[12],
              question11: this.answerTemp[14],
              question12: this.answerTemp[15],
              question13: this.answerTemp[16],
              question14: this.answerTemp[17],
              question15: this.answerTemp[19],
              question16: this.answerTemp[20],
              question17: this.answerTemp[21],
              question18: this.answerTemp[23],
              question19: this.answerTemp[24],
              question20: this.answerTemp[25],
              question21: this.answerTemp[26],
              question22: this.answerTemp[27],
              question23: this.answerTemp[29],
              question24: this.answerTemp[30],
              question25: this.answerTemp[31],
              question26: this.answerTemp[33],
              question27: this.answerTemp[34],
              question28: this.answerTemp[36],
              question29: this.answerTemp[37],
              question30: this.answerTemp[39],
              question31: this.answerTemp[40],
              question32: this.answerTemp[41],
              question33: this.answerTemp[42],
              date: this.answerTemp[43]
            }
            // console.log(answer);
            this.companyExcel.push(answer);
          }
        }
      });
      // console.log(this.subjectExcel);

      this.excelService.exportAsExcelFile(this.companyExcel, 'company');
      this.companyExcel = [];
      this.radioValue = '';
      this.selectedYear = '';
      this.studentIdDropDown = false;
      this.yearDropDown = false;
    });
  }

  setData(survey_key) {
    console.log(survey_key);
    this.surveyKey = survey_key;
  }

  radioCheckValue(newValue) {
    console.log(newValue);
    if (newValue == 'ดูรายงานตามปีการศึกษา') {
      this.studentIdDropDown = true;
      this.yearDropDown = false;
    } else if (newValue == 'ดูทั้งหมด') {
      this.studentIdDropDown = false;
      this.yearDropDown = false;
    } else {
      this.studentIdDropDown = false;
      this.yearDropDown = true;
    }
  }

  goToReport() {
    console.log(this.radioValue);
    console.log(this.selectedYear);

    localStorage.setItem('yearType', this.radioValue);
    localStorage.setItem('year', this.selectedYear);

    if (this.surveyKey == '1') {
      this.router.navigate(['/subject-report']);
    } else if (this.surveyKey == '2') {
      this.router.navigate(['/work-report']);
    } else {
      this.router.navigate(['/company-report']);
    }
  }

  clearData() {
    this.surveyKey = '';
    this.radioValue = '';
    this.selectedYear = '';
    this.studentIdDropDown = false;
    this.yearDropDown = false;
  }

  downloadAnswer() {
    this.answerList.subscribe(data => {
      this.answers = [];
      data.forEach(element => {
        if (this.doSurveyTemp.find(item => item.key == element.do_survey_id)) {
          let index = this.doSurveyTemp.findIndex(item => item.key == element.do_survey_id);
          if (this.doSurveyTemp[index]['survey_id'] == this.surveyKey) {
            if (this.radioValue == 'ดูรายงานตามปีการศึกษา') {
              let x = this.doSurveyTemp[index]['target_id'].toString();
              let year = '25' + x.substring(0, 2);
              if (year == this.selectedYear) {
                this.answers.push(element);
              }
            } else if (this.radioValue == 'ดูรายงานตามปีที่กรอก') {
              let x = this.doSurveyTemp[index]['date'].toString();
              let year = parseInt(x.substring(6, 10)) + 543;
              if (year == this.selectedYear) {
                this.answers.push(element);
              }
            } else {
              this.answers.push(element);
            }
          }
        }
      });
      console.log(this.answers);

      if (this.surveyKey == '1') {
        this.subjectExport();
      } else if (this.surveyKey == '2') {
        this.workExport();
      } else {
        this.companyExport();
      }
    });
  }
}

