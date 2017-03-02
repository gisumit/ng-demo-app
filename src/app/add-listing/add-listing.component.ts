import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  title: any;
  owner: any;
  city: any;
  bedrooms: any;
  price: any;
  type: any;
  

  constructor(
    private Fb: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit() {
    let prop = {
      title: this.title,
      owner: this.owner,
      city: this.city,
      bedrooms: this.bedrooms,
      price: this.price,
      type: this.type
    }
       
    this.Fb.addProp(prop);

    this.router.navigate(['/listings'])
  }

}
