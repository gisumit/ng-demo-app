import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PropList } from './prop-list';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }
  
  getListings() {
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<PropList[]>;
    return this.listings;
  }
  

}

