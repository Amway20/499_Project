import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class LoginServiceService {

  list: any;
  key: AngularFireList<any[]>;

  constructor(private db:AngularFireDatabase) { }

  // getList(path){
  //   this.list =  this.db.list(path).valueChanges();
  //   return this.list;
  // }

  getList(path): AngularFireList<any[]>{
    this.list =  this.db.list(path).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    return this.list;
  }

}
