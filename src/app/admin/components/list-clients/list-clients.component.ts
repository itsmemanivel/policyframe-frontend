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
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css',"../../../admin/shared.css"]
})
export class ListClientsComponent implements OnInit {


  // username: string;
  // email: string;
  // image: any;
  // role: string;
  // createdtime: Date; 

  selectedLevel=[];
  hideButton: number = 0;
  clients=[];

  client: User = new User();

  constructor(private apollo: Apollo,public dialog: MatDialog , private upload: AwsService, public loadService: LoaderService) { }

  ngOnInit(): void {


    this.getUsers();

  }


  /**
 * ----------------------------------------------------
 * Dialog  Client
 * ----------------------------------------------------
 * @method openDialog
 */
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogueComponent,{

      data: {username: this.client.username, email:this.client.email, role : this.client.role}

    });
    
    dialogRef.afterClosed().subscribe(data =>      {




      if(data){     


           this.loadService.emitData();


       this.client = data[0];

       this.client.role = "client";

       var  file = data[0].image;

       this.upload.uploadImge(file).subscribe(data =>{

         this.client.image = data.Location;
 
    
        this.addClient();
        


       }, error =>{

            console.log("error");
       })
       }
    });
    

  }








     /**
 * ----------------------------------------------------
 * Add  Client
 * ----------------------------------------------------
 * @method addClient
 */

addClient(){



   let dateFormat = require('dateformat');
   let now = new Date();
   this.client.createdtime = dateFormat(now, "dddd, mmmm ds, yyyy, h:MM:ss TT");

  this.apollo.mutate({ mutation: Query.addUser,
    variables: {
          
       
      username :this.client.username,
      email : this.client.email,
      image   : this.client.image,
      role : this.client.role,
      password: this.client.password,
      createdtime : this.client.createdtime
    

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
 * Delete  Client
 * ----------------------------------------------------
 * @param id
 */

deleteClients(){

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
 * @function getUsers
 */

 

getUsers(){


  this.apollo.watchQuery({query: Query.getUsers})
  .valueChanges
  .map((result:any) => result.data.getUsers).subscribe((data) =>{
       this.clients = data;

      //  for(var i=0; i<data.length; i++){

      //   if(data[i].role === "client"){
      //     var client = [];


         
      //     client= data[i];

      //     console.log(client);

          
      //   }
      //  }

       
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
