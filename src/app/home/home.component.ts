import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnChanges{

  constructor(private router:Router) { }
  ngOnChanges(){
console.log("onchangesffff");
  }

  ngOnInit(): void {
    console.log("oninit")
  }
  onClick(){
    this.router.navigate(['about']);
  }
  nameSearch:string='';
  prodArr=[
    {
      sno:1,
      name:'tv',
      price:12000
    },
    {
      sno:2,
      name:'mobile',
      price:13000
    },
    {
      sno:3,
      name:'mobile-samsung',
      price:12000
    },
    {
      sno:4,
      name:'mobile-redmi',
      price:12000
    },
    {
      sno:5,
      name:'tv-hond',
      price:12000
    },
    {
      sno:6,
      name:'tv-dell',
      price:12000
    },
    {
      sno:7,
      name:'mobile-realme',
      price:12000
    },
    {
      sno:8,
      name:'washing-machine',
      price:12000
    },
    {
      sno:9,
      name:'washing-machine-honda',
      price:12000
    },
    {
      sno:10,
      name:'laptop-dell',
      price:12000
    },
    {
      sno:11,
      name:'laptop-intel',
      price:12000
    },

  ]

}
