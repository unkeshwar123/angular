import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users=[];
  admins=[];
pushUser(data){
this.users.push(data)

}
// @HostListener('click')myClick(){
//   alert("checked");

pushAdmins(data){
  this.admins.push(data)
  
  }
  // date=new Date();
  value="hello world"
  
}
