import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';
import  '../../../admin/shared.css';
import {MatDialog} from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { AwsService } from '../../../aws/aws.service';
// import { onError } from 'apollo-link-error';
import { LoaderService } from '../../../shared/loader/loader.service'


import { PPT } from '../types';



@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ["../../../admin/shared.css"]

})
export class PPTComponent implements OnInit {

  // name: string;
  // description: string;
  // content: string;
  // image: any;
  // createdtime: Date; 

  selectedLevel=[];
  hideButton: number = 0;
  ppts : Array<any>;
  ppt : PPT = new PPT();

  constructor(private apollo: Apollo,public dialog: MatDialog , private upload: AwsService, public loadService: LoaderService) { }

  

  ngOnInit(): void {
    this.getPpts();
  }


   /**
 * ----------------------------------------------------
 * Dialog  Testimonals
 * ----------------------------------------------------
 * @method openDialog
 */
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogueComponent,{

      data: {name: this.ppt.author, description:this.ppt.description, content : this.ppt.content}

    });
    
    dialogRef.afterClosed().subscribe(data =>      {





      if(data){

        this.ppt = data[0];

        this.loadService.emitData();


        // this.ppt.author = data[0].name;
        // this.ppt.description = data[0].description;
        // this.ppt.content = data[0].content;

       

       var  file = data[0].image;

       this.upload.uploadPPT(data[0].content).subscribe(data =>{

         this.ppt.content = data.Location;

       this.upload.uploadImge(file).subscribe(data =>{


         this.ppt.image = data.Location;

    
        this.addPPT();
        


       }, error =>{

            console.log("image error");
       })

     }, error =>{

            console.log(" PPT error");


     })
      
      }

    });
    

  }







     /**
 * ----------------------------------------------------
 * Add  PPT
 * ----------------------------------------------------
 * @method addPPT
 */

addPPT(){



   let dateFormat = require('dateformat');
   let now = new Date();
   this.ppt.createdtime = dateFormat(now, "dddd, mmmm ds, yyyy, h:MM:ss TT");

  this.apollo.mutate({ mutation: Query.addPpt,
    variables: {
          
       
      author :this.ppt.author,
      title : this.ppt.title,
      content : this.ppt.content,
      image   : this.ppt.image,
      description : this.ppt.description,
      createdtime : this.ppt.createdtime,
      category : this.ppt.category,
      tags : this.ppt.tags

      }}).subscribe(data =>{

          this.loadService.emitData();
          window.location.reload();
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

deletePPT(){

    var count = this.selectedLevel.length;

    for(var i=0; i<count; i++){
      var  _id = this.selectedLevel[i]._id;
      this.loadService.emitData();
      this.apollo.mutate({mutation : Query.deletePpt, 
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
 * Get All Ppts
 * ----------------------------------------------------
 * @function getPpts
 */

 

getPpts(){


  this.apollo.watchQuery({query: Query.getPpts})
  .valueChanges
  .map((result:any) => result.data.getPpts).subscribe((data) =>{
       this.ppts = data;
      //  console.log(this.ppts)
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
