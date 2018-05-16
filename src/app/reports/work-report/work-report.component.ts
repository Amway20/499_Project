import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';

import * as html2canvas from 'html2canvas'
import { TwitterAuthProvider_Instance } from '@firebase/auth-types';
declare let jsPDF;

@Component({
  selector: 'app-work-report',
  templateUrl: './work-report.component.html',
  styleUrls: ['./work-report.component.css']
})

export class WorkReportComponent implements OnInit {

  data: any;
  answerList: any;
  doSurveyList: any;

  doSurveyTemp = [];
  graphTemp = [];

  public workplaceTemp: Array<Object> = [];
  public uniTemp: Array<Object> = [];
  public jobTemp: Array<Object> = [];
  // workplaceTemp = [];
  // uniTemp = [];
  // jobTemp = [];

  yearType: any;
  yearValue: any;
  targetId: any;

  yearTypeName: any;
  showYear: any;
  showAll: any;

  // count
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;
  f = 0;
  allCount = 0;

  constructor(@Inject(FirebaseService) private db: AngularFireDatabase, private router: Router,
    private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.yearType = localStorage.getItem("yearType");
    this.yearValue = localStorage.getItem("year");

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

    this.answerList = this.firebaseService.getList('/answer');
    this.doSurveyList = this.firebaseService.getList('/do_survey');

    this.doSurveyList.subscribe(data => {
      data.forEach(tmp => {
        if (tmp.survey_id == 2) {
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

    this.answerList.subscribe(data => {
      data.forEach(tmp => {
        if (tmp.answer != '') {
          if (this.doSurveyTemp.find(item => item.key == tmp.do_survey_id)) {
            // console.log(tmp);

            // graph
            if (tmp.question_id == '25') {

              this.graphTemp.push(tmp.answer);
            }

            // work place
            if (tmp.question_id == '26') {
              if (this.workplaceTemp.find(item => item['answer'] == tmp.answer)) {
                let index = this.workplaceTemp.findIndex(item => item['answer'] == tmp.answer);
                this.workplaceTemp[index]['count']++;
              } else {
                const data = {
                  answer: tmp.answer,
                  count: 1
                }
                this.workplaceTemp.push(data);
              }
            }

            // university
            if (tmp.question_id == '27') {
              if (this.uniTemp.find(item => item['answer'] == tmp.answer)) {
                let index = this.uniTemp.findIndex(item => item['answer'] == tmp.answer);
                this.uniTemp[index]['count']++;
              } else {
                const data = {
                  answer: tmp.answer,
                  count: 1
                }
                this.uniTemp.push(data);
              }
            }

            // job
            if (tmp.question_id == '28') {
              if (this.jobTemp.find(item => item['answer'] == tmp.answer)) {
                let index = this.jobTemp.findIndex(item => item['answer'] == tmp.answer);
                this.jobTemp[index]['count']++;
              } else {
                const data = {
                  answer: tmp.answer,
                  count: 1
                }
                this.jobTemp.push(data);
              }
            }
          }
        }


        this.workplaceTemp.sort((a, b) => {
          if (a['count'] < b['count']) return 1;
          else if (a['count'] > b['count']) return -1;
          else return 0;
        });
        // console.log(this.workplaceTemp);

        this.uniTemp.sort((a, b) => {
          if (a['count'] < b['count']) return 1;
          else if (a['count'] > b['count']) return -1;
          else return 0;
        });
        // console.log(this.uniTemp);

        this.jobTemp.sort((a, b) => {
          if (a['count'] < b['count']) return 1;
          else if (a['count'] > b['count']) return -1;
          else return 0;
        });
        // console.log(this.jobTemp);
      });

      for (let i = 0; i < this.graphTemp.length; i++) {
        if (this.graphTemp[i] == 'ได้งานแล้ว (ทำงานตรงสาย)') {
          this.a = this.a + 1;
        } else if (this.graphTemp[i] == 'ได้งานแล้ว (ทำงานไม่ตรงสาย)') {
          this.b = this.b + 1;
        } else if (this.graphTemp[i] == 'กำลังศึกษาต่อ') {
          this.c = this.c + 1;
        } else if (this.graphTemp[i] == 'ประกอบอาชีพอิสระ (เช่น ทำธุรกิจส่วนตัว)') {
          this.d = this.d + 1;
        } else if (this.graphTemp[i] == 'กำลังหางานทำ') {
          this.e = this.e + 1;
        } else {
          this.f = this.f + 1;
        }
      }
      this.allCount = this.a + this.b + this.c + this.d + this.e + this.f;
      this.data = {
        labels: ['ได้งานแล้ว (ทำงานตรงสาย)', 'ได้งานแล้ว (ทำงานไม่ตรงสาย)', 'กำลังศึกษาต่อ', 'ประกอบอาชีพอิสระ', 'กำลังหางานทำ', 'กำลังเตรียมตัวศึกษาต่อ'],
        datasets: [
          {
            data: [this.a, this.b, this.c, this.d, this.e, this.f],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF0099",
              "#CCFF33",
              "#CC66CC"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF0099",
              "#CCFF33",
              "#CC66CC"
            ]
          }]
      };
    });
  }

  GeneratePDF() {
    html2canvas(document.getElementById('content')).then(function (canvas) {
      document.body.appendChild(canvas);
      var pdf = new jsPDF('p', 'pt', 'a4');

      pdf.addHTML(canvas, function () {
        pdf.save('work_survey_report.pdf');
      });
    });
    window.location.reload();
  }

  back() {
    this.router.navigate(['/reports']);
  }
}

