

export class userdetails {
     userId: string='';
     firstName:string='';
     lastName:string='';
     age:string='';
     gender:string='';
     userList:any[]=[];

     

    createUser (user: {}) {
        this.userList.push(user);

    }

    


    


}
