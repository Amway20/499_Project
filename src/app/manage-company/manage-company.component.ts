import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseService } from '../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  companyList: any;
  dataList: any;
  c_id: any;
  c_name: any;
  c_address: any;
  c_tel: any;
  basePath = "/company";
  searchData: any;
  searchTemp = [];
  companyTemp = [];

  constructor(@Inject(FirebaseService) private router: Router, private firebaseService: FirebaseService,
    private db: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyList = this.firebaseService.getList('/company');
    this.companyList.subscribe(data => {
      data.forEach(element => {
        this.companyTemp.push(element);
        this.searchTemp.push(element);
      });
    });
  }

  setDelCompany(data){
    this.c_id = data.key;
    this.c_name = data.company_name;
    this.c_address = data.c_address;
    this.c_tel = data.tel;
  }

  delCompany() {
    const data = {
      key: this.c_id,
      company_name: this.c_name,
      company_address: this.c_address,
      tel: this.c_tel
    }
    this.firebaseService.delData(data, '/company');
    this.companyTemp = [];
  }

  setData(data) {
    if (data.company_address == undefined) {
      this.c_id = data.key;
      this.c_name = data.company_name;
      this.c_address = '';
      this.c_tel = data.tel;
    } else if (data.tel == undefined) {
      this.c_id = data.key;
      this.c_name = data.company_name;
      this.c_address = data.company_address;
      this.c_tel = '';
    } else if (data.company_address == undefined && data.tel == undefined){
      this.c_id = data.key;
      this.c_name = data.company_name;
      this.c_address = '';
      this.c_tel = '';
    } else {
      this.c_id = data.key;
      this.c_name = data.company_name;
      this.c_address = data.company_address;
      this.c_tel = data.tel;
    }
  }

  editData() {
    console.log(this.c_id);
    
    const data = {
      key: this.c_id,
      company_name: this.c_name,
      company_address: this.c_address,
      tel: this.c_tel
    };
    // console.log(dataObj);
    this.firebaseService.editData(this.c_id, data, this.basePath);
    this.companyTemp = [];
  }

  search() {
    console.log(this.searchData);
    console.log(this.searchData.length);
    this.companyTemp = [];
    this.companyList.subscribe(data => {
      data.forEach(tmp => {
        let keySearch = tmp.company_name;
        if (keySearch.substring(0, this.searchData.length) == this.searchData) {
          this.companyTemp.push(tmp);
        }
      });
    });
  }
  searchAll() {
    this.companyTemp = [];
    this.companyList.subscribe(data => {
      data.forEach(tmp => {
        this.companyTemp.push(tmp);
      });
    });
  }

}
