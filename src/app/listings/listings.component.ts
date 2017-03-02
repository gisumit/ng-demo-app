import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { PropList } from '../prop-list';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings: PropList;

  constructor(private FDb: FirebaseService) { }

  ngOnInit() {
    this.FDb.getListings().subscribe(listings => {
      console.log(listings);      
      this.listings = listings;
    });
  }

}
// "auth != null"