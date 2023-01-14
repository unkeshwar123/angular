import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }
  mesg(){
    alert("thanks!!!!!!!!!")
  }
  userName=new BehaviorSubject('userName');
}
