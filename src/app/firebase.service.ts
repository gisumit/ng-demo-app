import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { PropList } from './prop-list';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<PropList[]>;
  prop: FirebaseObjectObservable<PropList>;
  folder: any;


  constructor(private af: AngularFire) {
    this.folder = 'propimages';
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<PropList[]>;
   }
  
  getListings() {
    return this.listings;
  }
  
  getProp(id) {
    this.prop = this.af.database.object(`/listings/${id}`) as FirebaseObjectObservable<PropList>;
    return this.prop;
  }

  addProp(prop) {
    let storageRef = firebase.storage().ref();
    for( let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      let path = `/${this.folder}/${selectedFile.name}`;
      let iref = storageRef.child(path);
      iref.put(selectedFile).then( snapshot => {
        prop.image = selectedFile.name;
        prop.path = path;
        return this.listings.push(prop);
      });
    }
    //ase.list('/listing').push(prop);
  }

  updateProp(id, prop) {
    return this.listings.update(id, prop);
  }

  deleteProp(id) {
    return this.listings.remove(id);
  }
}

