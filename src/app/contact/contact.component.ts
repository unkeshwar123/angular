import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../appServices/message-service.service';

@Component({
  selector: 'app-contct',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _MessageService:MessageServiceService) { }

  ngOnInit(): void {
  }
  onClick(){
    this._MessageService.mesg();
  }

}
