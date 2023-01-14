import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }
  isValid:boolean=false;
  onClick(){
    this.isValid=true;
  }
  selectedValue:string;
  getValue(event){
    console.log(event.target.value);
    this.selectedValue=event.target.value;

  }
  arr=[{pname:"p1", pprice:233},
  {pname:"p2", pprice:234}]

}
