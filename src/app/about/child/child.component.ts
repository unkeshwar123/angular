import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count:number=0;
  @Output() inputEvent=new EventEmitter()
 onClick(input){
this.count=this.count+1;
this.inputEvent.emit(input.value);

 }
}
