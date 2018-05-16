import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import * as html2canvas from 'html2canvas'
import { TwitterAuthProvider_Instance } from '@firebase/auth-types';
declare let jsPDF;

@Component({
  selector: 'app-company-report',
  templateUrl: './company-report.component.html',
  styleUrls: ['./company-report.component.css']
})
export class CompanyReportComponent implements OnInit {

  answerList: any;
  doSurveyList: any;

  traitTemp = [];
  doSurveyTemp = [];
  doSurveyDate: any;
  data: any;
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;
  f = 0;

  yearType: any;
  yearValue: any;

  yearTypeName: any;
  showYear: any;
  showAll: any;

  constructor(@Inject(FirebaseService) private db: AngularFireDatabase, private router: Router,
    private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.yearType = localStorage.getItem("yearType");
    this.yearValue = localStorage.getItem("year");

    if(this.yearType == 'ดูรายงานตามปีที่กรอก'){
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
        if (tmp.survey_id == 3) {
          if (this.yearType == "ดูรายงานตามปีที่กรอก") {
            this.doSurveyDate = tmp.date;
            let x = this.doSurveyDate.toString();
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
        if (this.doSurveyTemp.find(item => item.key == tmp.do_survey_id)) {
          if (tmp.question_id == '70') {
            this.traitTemp.push(tmp);
          }
          if (tmp.question_id == '38' || tmp.question_id == '39' || tmp.question_id == '40' || tmp.question_id == '41') {
            this.a = this.a + parseInt(tmp.answer);
          } else if (tmp.question_id == '43' || tmp.question_id == '44' || tmp.question_id == '45' || tmp.question_id == '46') {
            this.b = this.b + parseInt(tmp.answer);
          } else if (tmp.question_id == '48' || tmp.question_id == '49' || tmp.question_id == '50') {
            this.c = this.c + parseInt(tmp.answer);
          } else if (tmp.question_id == '52' || tmp.question_id == '53' || tmp.question_id == '54' || tmp.question_id == '55' || tmp.question_id == '56') {
            this.d = this.d + parseInt(tmp.answer);
          } else if (tmp.question_id == '58' || tmp.question_id == '59' || tmp.question_id == '60') {
            this.e = this.e + parseInt(tmp.answer);
          } else if (tmp.question_id == '62' || tmp.question_id == '63') {
            this.f = this.f + parseInt(tmp.answer);
          }
        }

      })

      this.data = {
        labels: ['ด้านคุณธรรมจริยธรรม', 'ด้านความรู้', 'ด้านทักษะทางปัญญา', 'ด้านความสัมพันธ์ระหว่างบุคคล', 'ด้านทักษะการวิเคราะห์เชิงตัวเลข', 'ด้านวิชาชีพ'],
        datasets: [
          {
            label: 'ความพึงพอใจของนายจ้าง',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: [this.a, this.b, this.c, this.d, this.e, this.f]
          },
          {
            label: '',
            backgroundColor: '#9CCC65',
            borderColor: '#7CB342',
            data: [0, 0, 0, 0, 0, 0]
          }
        ]
      };
    });
  }

  GeneratePDF() {
    html2canvas(document.getElementById('content')).then(function (canvas) {
      document.body.appendChild(canvas);
      var pdf = new jsPDF('p', 'pt', 'a4');

      pdf.addHTML(canvas, function () {
        pdf.save('survey_report_for_company.pdf');
      });
    });
    window.location.reload();
  }

  back() {
    this.router.navigate(['/reports']);
  }
}



