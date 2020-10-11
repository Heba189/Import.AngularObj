import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private ActivatedRoute:ActivatedRoute , private router:Router) { }

  ngOnInit() {
  }
  getpageId(){
    this.ActivatedRoute.params.subscribe((params) =>{
      debugger;
      console.log('params', params)
    })
  }

}
