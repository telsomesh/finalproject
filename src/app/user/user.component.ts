import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { userdetails } from './userclass';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  

  userObj = new userdetails();
  userList:any[]=[];

  signupForm : FormGroup=new FormGroup({
    'userName': new FormControl('',Validators.required),
    'firstName': new FormControl('',[Validators.required,Validators.maxLength(65),Validators.minLength(4)]),
    'middleName': new FormControl(null),
    'lastName': new FormControl(null,[Validators.required,Validators.maxLength(65),Validators.minLength(4)]),
    'age': new FormControl(null,Validators.required),
    'dateOfBirth': new FormControl(null,Validators.required),
    'address': new FormControl(null,Validators.required)
  });

  onSubmit(){
    console.log(this.signupForm.value);
  }

  saveUpdateUser() {
  
    this.userList.push(
     {... this.userObj}
    );

    this.clearUser();
  }

  deleteUser(selectedUser: HTMLTableRowElement){
      let index =this.userList.indexOf(selectedUser);
      console.log(selectedUser);
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
    console.log(particularUser);
    this.userObj.firstName=this.userList[i].firstName;
    this.userObj.lastName=this.userList[i].lastName;
    this.userObj.age=this.userList[i].age;

  }


  constructor() { 
    
  }

  ngOnInit() {
  
  }

    
      

  }


