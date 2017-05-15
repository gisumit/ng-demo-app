import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
 
  id: any;
  title: any;
  owner: any;
  city: any;
  bedrooms: any;
  price: any;
  type: any;

  constructor(
    private Fb: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
        
    this.Fb.getProp(this.id).subscribe( prop => {
      this.title = prop.title;
      this.owner = prop.owner;
      this.city = prop.city;
      this.bedrooms = prop.bedrooms;
      this.price = prop.price;
      this.type = prop.type;
    })
  }

  onEditSubmit() {
    let prop = {
      title : this.title,
      owner : this.owner,
      city : this.city,
      bedrooms : this.bedrooms,
      price : this.price,
      type : this.type
    }

    this.Fb.updateProp(this.id, prop);
    this.router.navigate(['listing/'+this.id]);
  }

}
