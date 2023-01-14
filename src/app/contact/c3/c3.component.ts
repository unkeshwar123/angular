import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/appServices/message-service.service';


@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

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
