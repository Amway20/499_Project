import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor( @Inject(FirebaseService) private db: AngularFireDatabase, private router: Router,
  private firebaseService: FirebaseService, private route: ActivatedRoute) { }

  basePath = "/company";
  company_id = '';
  company_name = '';
  company_address = '';
  tel = '';
  companyCount:any;
  companyList:any;

  ngOnInit() {
    this.companyList = this.firebaseService.getList('/company');

    this.companyList.subscribe(data => {
      this.companyCount = 1;
      data.forEach(element => {
        this.companyCount =this.companyCount+1;
      });
    });
  }

  addCompany() {
    // console.log(data.value);
    const data = {
      key: this.companyCount,
      company_name: this.company_name,
      company_address: this.company_address,
      tel: this.tel
    }
    this.firebaseService.addData(data, this.basePath);
    this.goToManageCompany();
  }

  goToManageCompany = () => {
    this.router.navigate(['/manage-company']);
  }

}
