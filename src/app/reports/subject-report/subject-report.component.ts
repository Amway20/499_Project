import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { PercentPipe } from '@angular/common';

import * as html2canvas from 'html2canvas'
import { TwitterAuthProvider_Instance } from '@firebase/auth-types';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
declare let jsPDF;

@Component({
  selector: 'app-subject-report',
  templateUrl: './subject-report.component.html',
  styleUrls: ['./subject-report.component.css']
})

export class SubjectReportComponent implements OnInit {

  data: any;
  answerList: any;
  subjectList: any;
  doSurveyList: any;
  studentList: any;
  temp = '';
  index: any;
  yeartemp = [];
  targetId = '';
  doSurveyTemp = [];
  studentTemp = [];
  yearTmp: any;

  selectedYear: any;

  yearTypeName: any;
  showYear: any;
  showAll: any;
  // count
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  allCount = 0;

  yearType: any;
  yearValue: any;

  public workTemp: Array<Object> = [];
  public studyTemp: Array<Object> = [];
  public dailyTemp: Array<Object> = [];

  constructor(@Inject(FirebaseService) private db: AngularFireDatabase, private router: Router,
    private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.yearType = localStorage.getItem("yearType");
    this.yearValue = localStorage.getItem("year");

    this.answerList = this.firebaseService.getList('/answer');
    this.subjectList = this.firebaseService.getList('/subject');
    this.doSurveyList = this.firebaseService.getList('/do_survey');
    this.studentList = this.firebaseService.getList('/student');

    if(this.yearType == 'ดูรายงานตามปีการศึกษา'){
      this.yearTypeName = 'ปีการศึกษา'
      this.showYear = true;
      this.showAll = false;
    }else if(this.yearType == 'ดูรายงานตามปีที่กรอก'){
      this.yearTypeName = 'ประจำปี';
      this.showYear = true;
      this.showAll = false;
    }else{
      this.showYear = false;
      this.showAll = true;
    }

    this.doSurveyList.subscribe(data => {
      data.forEach(tmp => {
        if (tmp.survey_id == 1) {
          if (this.yearType == 'ดูรายงานตามปีการศึกษา') {
            this.targetId = tmp.target_id;
            let x = this.targetId.toString();
            let year = '25' + x.substring(0, 2);
            if (year == this.yearValue) {
              this.doSurveyTemp.push(tmp);
            }
          } else if (this.yearType == "ดูรายงานตามปีที่กรอก") {
            this.targetId = tmp.date;
            let x = this.targetId.toString();
            let year = parseInt(x.substring(6, 10)) + 543;
            if (year == this.yearValue) {
              this.doSurveyTemp.push(tmp);
            }
          } else if (this.yearType == "ดูทั้งหมด") {
            this.doSurveyTemp.push(tmp);
          }
        }
      });
      console.log(this.doSurveyTemp);
    });

    this.studentList.subscribe(data => {
      data.forEach(element => {
        this.studentTemp.push(element.key);
      });
    });

    this.answerList.subscribe(data => {
      data.forEach(tmp => {
        if (this.doSurveyTemp.find(item => item.key == tmp.do_survey_id)) {
          //  work
          if (tmp.question_id == '10') {
            this.temp = tmp.answer.substring(0, [6]);
            if (this.workTemp.find(item => item['subject_id'] == this.temp)) {
              this.index = this.workTemp.findIndex(item => item['subject_id'] == this.temp);
              this.workTemp[this.index]['count']++;
            } else {
              const data = {
                subject_id: this.temp,
                count: 1
              }
              this.workTemp.push(data);
            }
          }
          // study
          if (tmp.question_id == '11') {
            this.temp = tmp.answer.substring(0, [6]);
            if (this.studyTemp.find(item => item['subject_id'] == this.temp)) {
              this.index = this.studyTemp.findIndex(item => item['subject_id'] == this.temp);
              this.studyTemp[this.index]['count']++;
            } else {
              const data = {
                subject_id: this.temp,
                count: 1
              }
              this.studyTemp.push(data);
            }
          }
          // daily
          if (tmp.question_id == '12') {
            this.temp = tmp.answer.substring(0, [6]);
            if (this.dailyTemp.find(item => item['subject_id'] == this.temp)) {
              this.index = this.dailyTemp.findIndex(item => item['subject_id'] == this.temp);
              this.dailyTemp[this.index]['count']++;
            } else {
              const data = {
                subject_id: this.temp,
                count: 1
              }
              this.dailyTemp.push(data);
            }
          }
          // graph
          if (tmp.question_id == '6') {
            if (this.doSurveyTemp.find(item => item.key == tmp.do_survey_id)) {
              let index = this.doSurveyTemp.findIndex(item => item.key == tmp.do_survey_id);
              if (this.yearType == "ดูรายงานตามปีการศึกษา") {
                this.targetId = this.doSurveyTemp[index].target_id;
                let x = this.targetId.toString();
                let year = '25' + x.substring(0, 2);
                this.yearTmp = year;
              } else if (this.yearType == "ดูรายงานตามปีที่กรอก") {
                this.targetId = this.doSurveyTemp[index].date;
                let x = this.targetId.toString();
                let year = parseInt(x.substring(6, 10)) + 543;
                this.yearTmp = year;
              }

              if (this.doSurveyTemp[index].key == tmp.do_survey_id) {
                if (this.yearType != "ดูทั้งหมด") {
                  if (this.yearTmp == this.yearValue) {
                    if (tmp.answer == 'ได้งานแล้ว') {
                      this.a = this.a + 1;
                    } else if (tmp.answer == 'ศึกษาต่อ') {
                      this.b = this.b + 1;
                    } else if (tmp.answer == 'กำลังหางานทำ') {
                      this.c = this.c + 1;
                    } else {
                      this.d = this.d + 1;
                    }
                  }

                } else if (this.yearType == "ดูทั้งหมด") {
                  if (tmp.answer == 'ได้งานแล้ว') {
                    this.a = this.a + 1;
                  } else if (tmp.answer == 'ศึกษาต่อ') {
                    this.b = this.b + 1;
                  } else if (tmp.answer == 'กำลังหางานทำ') {
                    this.c = this.c + 1;
                  } else {
                    this.d = this.d + 1;
                  }
                }

              }
            }
          }
          this.allCount = this.a + this.b + this.c + this.d;
          this.data = {
            labels: ['ได้งานแล้ว', 'ศึกษาต่อ', 'กำลังหางานทำ', 'เตรียมตัวศึกษาต่อ'],
            datasets: [
              {
                data: [this.a, this.b, this.c, this.d],
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#66FF33"
                ],
                hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#66FF33"
                ]
              }]
          };

        }



      });

      // if (this.yearType == 'ดูรายงานตามปีการศึกษา') {
      //   if (this.doSurveyTemp.find(item => item.target_id.substring(0, 2) == this.yearValue.substring(2, 4))) {
      //     let index = this.doSurveyTemp.findIndex(item => item.target_id.substring(0, 2) == this.yearValue.substring(2, 4) && item.key == tmp.do_survey_id);
      //     console.log();

      //     console.log(this.doSurveyTemp[index]);

      //     if (this.doSurveyTemp[index].key == tmp.do_survey_id) {
      //       // work
      //       if (tmp.question_id == '10') {
      //         this.temp = tmp.answer.substring(0, [6]);
      //         if (this.workTemp.find(item => item['subject_id'] == this.temp)) {
      //           this.index = this.workTemp.findIndex(item => item['subject_id'] == this.temp);
      //           this.workTemp[this.index]['count']++;
      //         } else {
      //           const data = {
      //             subject_id: this.temp,
      //             count: 1
      //           }
      //           this.workTemp.push(data);
      //         }
      //       }
      //       // study
      //       if (tmp.question_id == '11') {
      //         this.temp = tmp.answer.substring(0, [6]);
      //         if (this.studyTemp.find(item => item['subject_id'] == this.temp)) {
      //           this.index = this.studyTemp.findIndex(item => item['subject_id'] == this.temp);
      //           this.studyTemp[this.index]['count']++;
      //         } else {
      //           const data = {
      //             subject_id: this.temp,
      //             count: 1
      //           }
      //           this.studyTemp.push(data);
      //         }
      //       }
      //       // daily
      //       if (tmp.question_id == '12') {
      //         this.temp = tmp.answer.substring(0, [6]);
      //         if (this.dailyTemp.find(item => item['subject_id'] == this.temp)) {
      //           this.index = this.dailyTemp.findIndex(item => item['subject_id'] == this.temp);
      //           this.dailyTemp[this.index]['count']++;
      //         } else {
      //           const data = {
      //             subject_id: this.temp,
      //             count: 1
      //           }
      //           this.dailyTemp.push(data);
      //         }
      //       }
      //       // graph
      //       if (tmp.question_id == '6') {
      //         if (this.doSurveyTemp.find(item => item.key == tmp.do_survey_id)) {
      //           let index = this.doSurveyTemp.findIndex(item => item.key == tmp.do_survey_id);
      //           this.targetId = this.doSurveyTemp[index].target_id;
      //           let x = this.targetId.toString();
      //           let year = '25' + x.substring(0, 2);
      //           if (this.doSurveyTemp[index].key == tmp.do_survey_id && year == this.yearValue) {
      //             if (tmp.answer == 'ได้งานแล้ว') {
      //               this.a = this.a + 1;
      //             } else if (tmp.answer == 'ศึกษาต่อ') {
      //               this.b = this.b + 1;
      //             } else if (tmp.answer == 'กำลังหางานทำ') {
      //               this.c = this.c + 1;
      //             } else {
      //               this.d = this.d + 1;
      //             }
      //           }
      //         }
      //       }
      //       this.allCount = this.a + this.b + this.c + this.d;
      //       this.data = {
      //         labels: ['ได้งานแล้ว', 'ศึกษาต่อ', 'กำลังหางานทำ', 'เตรียมตัวศึกษาต่อ'],
      //         datasets: [
      //           {
      //             data: [this.a, this.b, this.c, this.d],
      //             backgroundColor: [
      //               "#FF6384",
      //               "#36A2EB",
      //               "#FFCE56",
      //               "#66FF33"
      //             ],
      //             hoverBackgroundColor: [
      //               "#FF6384",
      //               "#36A2EB",
      //               "#FFCE56",
      //               "#66FF33"
      //             ]
      //           }]
      //       };

      //     }

      //   }
      // } else if (this.yearType == 'ดูรายงานตามปีที่กรอก') {

      // }

      // if (tmp.question_id == '10') {
      //   this.temp = tmp.answer.substring(0, [6]);
      //   if (this.workTemp.find(item => item['subject_id'] == this.temp)) {
      //     this.index = this.workTemp.findIndex(item => item['subject_id'] == this.temp);
      //     this.workTemp[this.index]['count']++;
      //   } else {
      //     const data = {
      //       subject_id: this.temp,
      //       count: 1
      //     }
      //     this.workTemp.push(data);
      //   }
      // }

      // if (tmp.question_id == '11') {
      //   this.temp = tmp.answer.substring(0, [6]);
      //   if (this.studyTemp.find(item => item['subject_id'] == this.temp)) {
      //     this.index = this.studyTemp.findIndex(item => item['subject_id'] == this.temp);
      //     this.studyTemp[this.index]['count']++;
      //   } else {
      //     const data = {
      //       subject_id: this.temp,
      //       count: 1
      //     }
      //     this.studyTemp.push(data);
      //   }
      // }

      // if (tmp.question_id == '12') {
      //   this.temp = tmp.answer.substring(0, [6]);
      //   if (this.dailyTemp.find(item => item['subject_id'] == this.temp)) {
      //     this.index = this.dailyTemp.findIndex(item => item['subject_id'] == this.temp);
      //     this.dailyTemp[this.index]['count']++;
      //   } else {
      //     const data = {
      //       subject_id: this.temp,
      //       count: 1
      //     }
      //     this.dailyTemp.push(data);
      //   }
      // }
      // });

      this.workTemp.sort((a, b) => {
        if (a['count'] < b['count']) return 1;
        else if (a['count'] > b['count']) return -1;
        else return 0;
      });
      console.log(this.workTemp);

      this.studyTemp.sort((a, b) => {
        if (a['count'] < b['count']) return 1;
        else if (a['count'] > b['count']) return -1;
        else return 0;
      });
      console.log(this.studyTemp);

      this.dailyTemp.sort((a, b) => {
        if (a['count'] < b['count']) return 1;
        else if (a['count'] > b['count']) return -1;
        else return 0;
      });
      console.log(this.dailyTemp);
    });



  }

  // public onChange(newValue) {
  //   this.a = 0;
  //   this.b = 0;
  //   this.c = 0;
  //   this.d = 0;
  //   this.allCount = 0;
  //   // console.log(newValue);
  //   // console.log(this.selectedYear);
  //   this.showGraph = true;

  //   this.answerList.subscribe(data => {
  //     data.forEach(tmp => {
  //       if (tmp.question_id == '6') {
  //         if (this.doSurveyTemp.find(item => item.key == tmp.do_survey_id)) {
  //           let index = this.doSurveyTemp.findIndex(item => item.key == tmp.do_survey_id);
  //           this.targetId = this.doSurveyTemp[index].target_id;
  //           let x = this.targetId.toString();
  //           let year = '25' + x.substring(0, 2);
  //           if (this.doSurveyTemp[index].key == tmp.do_survey_id && year == this.selectedYear) {
  //             if (tmp.answer == 'ได้งานแล้ว') {
  //               this.a = this.a + 1;
  //             } else if (tmp.answer == 'ศึกษาต่อ') {
  //               this.b = this.b + 1;
  //             } else if (tmp.answer == 'กำลังหางานทำ') {
  //               this.c = this.c + 1;
  //             } else {
  //               this.d = this.d + 1;
  //             }
  //           }
  //         }
  //       }
  //     });
  //     this.allCount = this.a + this.b + this.c + this.d;
  //     this.data = {
  //       labels: ['ได้งานแล้ว', 'ศึกษาต่อ', 'กำลังหางานทำ', 'เตรียมตัวศึกษาต่อ'],
  //       datasets: [
  //         {
  //           data: [this.a, this.b, this.c, this.d],
  //           backgroundColor: [
  //             "#FF6384",
  //             "#36A2EB",
  //             "#FFCE56",
  //             "#66FF33"
  //           ],
  //           hoverBackgroundColor: [
  //             "#FF6384",
  //             "#36A2EB",
  //             "#FFCE56",
  //             "#66FF33"
  //           ]
  //         }]
  //     };
  //   })
  // }


  GeneratePDF() {
    html2canvas(document.getElementById('content')).then(function (canvas) {
      document.body.appendChild(canvas);
      var pdf = new jsPDF('p', 'pt', 'a4');

      pdf.addHTML(canvas, function () {
        pdf.save('work_survey_report.pdf');
      });
      window.location.reload();
    });
    
  }

  back() {
    this.workTemp = [];
    this.dailyTemp = [];
    this.studyTemp = [];
    this.router.navigate(['/reports']);
  }

}
