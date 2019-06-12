import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// *** [EDIT] add import here
import * as firebase from 'firebase';
import 'firebase/firestore';

/*
  Generated class for the FirestoreServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreServiceProvider {
  public COLLECTION: string = "youtuber";
  private db: any;

  constructor(public http: HttpClient) {
    this.db = firebase.firestore();
    console.log('db');
  }

  getDocuments(collectionObj: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.collection(collectionObj)
        .get()
        .then((querySnapshot) => {
          let obj: any = [];

          querySnapshot
            .forEach((doc: any) => {
              obj.push(
                // *** [EDIT] document object here ***
                {
                  docid: doc.id,
                  channelid: doc.data().channelid,
                  nameCN: doc.data().nameCN
                }
              );
            });

          resolve(obj);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
}
