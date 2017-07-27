import { Injectable } from '@angular/core';
import { Arcpoint } from './arcpoint.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DefaultarcinfoService {
  arcInfos: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.arcInfos = database.list('/tools/point-infos');
  }

  getReqArcInfo() {
    return this.arcInfos;
  }

}
