import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/appServices/message-service.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private _MessageServiceService:MessageServiceService) {
    this._MessageServiceService.userName.subscribe(uname=>{this.userName=uname
   })}

  ngOnInit(): void {
  }
userName;
onClick(uname){
 this.userName=this._MessageServiceService.userName.next(uname.value);
}
}
