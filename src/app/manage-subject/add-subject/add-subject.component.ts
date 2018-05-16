import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../../service/firebase-service.service';
import { Injectable, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor( @Inject(FirebaseService) private db: AngularFireDatabase, private router: Router,
  private firebaseService: FirebaseService, private route: ActivatedRoute) { }

  basePath = "/subject";

  ngOnInit() {
  }

  async addSubject(data: NgForm) {
    // console.log(data.value);
    await this.firebaseService.addData(data.value, this.basePath);
    await this.goToManageAdmin();
  }

  goToManageAdmin = () => {
    this.router.navigate(['/manage-subject']);
  }


}
