import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  list: any;
  key: AngularFireList<any[]>;

  constructor(private db:AngularFireDatabase) {}


  getList(path): AngularFireList<any[]>{
    this.list =  this.db.list(path).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    return this.list;
  }

  // addData(data,path): AngularFireList<any[]>{
  //   this.db.list(path).push(data);
  //   return this.list;
  // }

  addData(data,path): void{
    const key = data.key.toString();
    delete data.key;
    this.db.list(path).set(key,data);
    // return this.list;
  }

  delData(data,path): void{
    // console.log("key=====");
    // console.log(data.key);
    this.db.list(path).remove(data.key);
  }

  editData(key, data, path) {
    console.log(data);
    delete data.key;
    this.db.object(path + '/' + key).update(data);
  }
}
