import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userdetails } from './userclass';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  

  userObj = new userdetails();
  userList:any[]=[];

  onSubmit(f:{}) {
    this.userList.push(f);
    console.log(f);
    
  }

  saveUpdateUser() {
  
    this.userList.push(
     {... this.userObj}
    );

    this.clearUser();
  }

  deleteUser(selectedUser: HTMLTableRowElement){
      let index =this.userList.indexOf(selectedUser);
      console.log(index);
      this.userList.splice(index,1);
    
  };

  clearUser() {
    this.userObj.userId='';
    this.userObj.firstName = '';
    this.userObj.lastName = '';
    this.userObj.age = '';
    this.userObj.gender = '';
  }

  modifyUser(particularUser: userdetails) {
    let i=this.userList.indexOf(particularUser.userId);
    console.log(i);
    this.userObj.firstName=this.userList[i].firstName;
    this.userObj.lastName=this.userList[i].lastName;
    this.userObj.age=this.userList[i].age;

  }



  constructor() { }

  ngOnInit(): void { }

}
