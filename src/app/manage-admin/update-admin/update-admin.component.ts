import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']

  
})
export class UpdateAdminComponent implements OnInit {
  params$: string;
  list: Observable<any[]>;
  basePath = "/staff/";
  data = {};
  constructor(private route: ActivatedRoute,
  private firebaseService: FirebaseService,
  private db:AngularFireDatabase) {
    this.params$ = this.route.snapshot.params["id"]
    this.db.object(this.basePath + this.params$).valueChanges().subscribe(data=>{
      this.data = data;
      // console.log(data);
    }
    );
   }

  ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     this.params$ = params['id']; 
  //  });  
    //this.params$ =  this.route.snapshot.paramMap.get('id');
   // this.list = this.firebaseService.getList(this.basePath);
  }

}
