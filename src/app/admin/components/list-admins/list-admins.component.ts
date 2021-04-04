import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';
import {MatDialog} from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { AwsService } from '../../../aws/aws.service';
// import { onError } from 'apollo-link-error';
import { LoaderService } from '../../../shared/loader/loader.service'

import { User } from '../types';



@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css',"../../../admin/shared.css"]
})
export class ListAdminsComponent implements OnInit {
  
  //  username: string;
  // email: string;
  // image: any;
  // role: string;
  // createdtime: Date; 



   selectedLevel=[];
  hideButton: number = 0;

  admins= [];
  admin: User = new User();


  showFiller = true;
  constructor(public apollo: Apollo,public dialog: MatDialog , private upload: AwsService, public loadService: LoaderService) { }

  ngOnInit(): void {
    this.getUsers();
  }



   /**
 * ----------------------------------------------------
 * Dialog  Admin
 * ----------------------------------------------------
 * @method openDialog
 */
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogueComponent,{

      data: {username: this.admin.username, email:this.admin.email, role : this.admin.role}

    });
    
    dialogRef.afterClosed().subscribe(data =>      {




      if(data){

                this.loadService.emitData();

       this.admin = data[0];
       
       this.admin.role = "admin";

       var  file = data[0].image;

       this.upload.uploadImge(file).subscribe(data =>{

         this.admin.image = data.Location;

         this.addAdmin();
        


       }, error =>{

            console.log("error");
       })
       }
    });
    

  }




   /**
 * ----------------------------------------------------
 * Add  Admin
 * ----------------------------------------------------
 * @method addAdmin
 */

addAdmin(){



   let dateFormat = require('dateformat');
   let now = new Date();
   this.admin.createdtime = dateFormat(now, "dddd, mmmm ds, yyyy, h:MM:ss TT");

  this.apollo.mutate({ mutation: Query.addUser,
    variables: {
          
       
      username :this.admin.username,
      email : this.admin.email,
      image   : this.admin.image,
      role : this.admin.role,
      password: this.admin.password,
      createdtime : this.admin.createdtime


      }}).subscribe(data =>{

          window.location.reload();
                    this.loadService.emitData();

      })

  //   const link = onError(({ graphQLErrors, networkError }) => {
  // if (graphQLErrors)
  //   graphQLErrors.map(({ message, locations, path }) =>
  //     console.log(
  //       `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
  //     ),
  //   );

  // if (networkError) console.log(`[Network error]: ${networkError}`);
  //  });
}




  /**
 * ----------------------------------------------------
 * Delete  Testimonals
 * ----------------------------------------------------
 * @param id
 */

deleteAdmins(){

    var count = this.selectedLevel.length;
    for(var i=0; i<count; i++){
      var  _id = this.selectedLevel[i]._id;
                this.loadService.emitData();

      this.apollo.mutate({mutation : Query.deleteUser, 
        variables:{
        _id:_id
        }})
      .subscribe(({data}) =>{

        window.location.reload();
                  this.loadService.emitData();

      },
      error =>{ 
        console.log("there was an error sending the query", error);

      })


    }


}


  /**
 * ----------------------------------------------------
 * Get All Users
 * ----------------------------------------------------
 * @method getUsers
 */

getUsers(){

  this.apollo.watchQuery({ query: Query.getUsers})
  .valueChanges
  .map((result:any) => result.data.getUsers).subscribe((data) =>{
   this.admins = data;
  
    // for(var i=0; i < count; i++){

    //   if(data[i].role === "admin"){

    //     this.admins.push(data[i]);
    //   }
    // }

  })

 }




  /**
 * ----------------------------------------------------
 * Selection List Change
 * ----------------------------------------------------
 * @function onNgModelChange
 */



onNgModelChange($event){

    this.selectedLevel = $event;
    this.hidebutton();

 }



hidebutton(){

     if(this.selectedLevel.length > 1){
          
          this.hideButton = 2;
     
     }else if(this.selectedLevel.length === 1){
           this.hideButton = 1;
     }else{

            this.hideButton = 0;
     }
}
  

}
