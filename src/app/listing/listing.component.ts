import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { PropList } from '../prop-list';
import * as firebase from 'firebase';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  id: any;
  prop: PropList;
  propImg: any;


  constructor(
    private Fs: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // get details of passed ID 
    this.id = this.route.snapshot.params['id'];
    this.Fs.getProp(this.id).subscribe(propertyObj => {
      this.prop = propertyObj;
      //
      
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(propertyObj.path)
      storageRef.child(propertyObj.path).getDownloadURL().then(url => {
        this.propImg = url;
      }).catch( err => console.log('Err', err))
    })
  }

  onDelete() {
    this.Fs.deleteProp(this.id);

    this.router.navigate(['/listings/']);
  }

}
