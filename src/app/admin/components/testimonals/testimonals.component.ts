import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component,Input,  Inject, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';
import {MatDialog} from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { AwsService } from '../../../aws/aws.service';
// import { onError } from 'apollo-link-error';
import { LoaderService } from '../../../shared/loader/loader.service'
import { Testimonal } from '../types';

@Component({
  selector: 'app-testimonals',
  templateUrl: './testimonals.component.html',
  styleUrls: ["./testimonals.component.css","../../../admin/shared.css"],
  
})
export class TestimonalsComponent implements OnInit, AfterViewInit {

  
  // author: string;
  // description: string;
  // content: string;
  // image: any;
  // createdtime: Date;

  testimonal: Testimonal = new Testimonal() ; 

  selectedLevel=[];
  hideButton: number = 0;
  testimonals: any;
  constructor(public apollo: Apollo, public dialog: MatDialog , private upload: AwsService, public loadService: LoaderService) { }



  
  ngOnInit(): void {

    this.getTestimonals();

  }

  ngAfterViewInit(){

  
  }




 /**
 * ----------------------------------------------------
 * Dialog  Testimonals
 * ----------------------------------------------------
 * @method openDialog
 */
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogueComponent,{

      data:{

         
         author: this.testimonal.author,
         content: this.testimonal.content,
         description: this.testimonal.description

      }
    });
    
    dialogRef.afterClosed().subscribe(data =>      {


     



      if(data){
           this.loadService.emitData();


        this.testimonal.author = data[0].author;
        this.testimonal.description = data[0].description;
        this.testimonal.content = data[0].content;

       

       var  file = data[0].image;

      

       this.upload.uploadImge(file).subscribe(data =>{

         this.testimonal.image = data.Location;

    
        this.addTestimonal();
        


       }, error =>{

            console.log("error");
       })
       }
    });
    

  }



  


  /**
 * ----------------------------------------------------
 * Add  Testimonals
 * ----------------------------------------------------
 * @method addTestimonal
 */

addTestimonal(){



   let dateFormat = require('dateformat');
   let now = new Date();
   this.testimonal.createdtime = dateFormat(now, "dddd, mmmm ds, yyyy, h:MM:ss TT");

  this.apollo.mutate({ mutation: Query.addTestimonal,
    variables: {
          
       
      author :this.testimonal.author,
      content : this.testimonal.content,
      image   : this.testimonal.image,
      description : this.testimonal.description,
      createdtime : this.testimonal.createdtime
    

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
 * Get All Testimonals
 * ----------------------------------------------------
 * @function getTestimonals
 */

 getTestimonals(){

  this.apollo.watchQuery({ query: Query.getTestimonals})
  .valueChanges
  .map((result:any) => result.data.getTestimonals).subscribe((data) =>{
    this.testimonals = data;
    // console.log(this.testimonals);
  })

 }



  /**
 * ----------------------------------------------------
 * Delete  Testimonals
 * ----------------------------------------------------
 * @param id
 */

deleteTestimonals(){

   this.loadService.emitData();

    var count = this.selectedLevel.length;
    for(var i=0; i<count; i++){
      var  _id = this.selectedLevel[i]._id;
      this.apollo.mutate({mutation : Query.deleteTestimonal, 
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

