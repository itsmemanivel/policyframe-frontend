import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';
import {MatDialog} from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { AwsService } from '../../../aws/aws.service';
// import { onError } from 'apollo-link-error';
import { LoaderService } from '../../../shared/loader/loader.service'

import { Template } from '../types';


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: [ "../../../admin/shared.css"]
})
export class TemplatesComponent implements OnInit {


  //  name: string;
  // description: string;
  // content: string;
  // image: any;
  // createdtime: Date; 

  selectedLevel=[];
    hideButton: number = 0;

  templates: Array<any>
  template: Template = new Template();

  constructor(private apollo: Apollo,public dialog: MatDialog , private upload: AwsService, public loadService: LoaderService) { }

  

  ngOnInit(): void {


    this.getTemplates();
  }



   /**
 * ----------------------------------------------------
 * Dialog  Testimonals
 * ----------------------------------------------------
 * @method openDialog
 */
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogueComponent,{

      data: {name: this.template.author, description:this.template.description, content : this.template.content}

    });
    
    dialogRef.afterClosed().subscribe(data =>      {




      if(data){
         this.loadService.emitData();

    

       this.template = data[0];

       var  file = data[0].image;


       this.upload.uploadTemplate(data[0].content).subscribe(data =>{


       this.template.content = data.Location;

       this.upload.uploadImge(file).subscribe(data =>{

         this.template.image = data.Location;

    
        this.addTemplate();
        


       }, error =>{

            console.log("error");
       })

     }, error =>{


       console.log(error);

     })
       }
    });
    

  }


   /**
 * ----------------------------------------------------
 * Add  Templates
 * ----------------------------------------------------
 * @method addTemplate
 */

addTemplate(){



   let dateFormat = require('dateformat');
   let now = new Date();
   this.template.createdtime = dateFormat(now, "dddd, mmmm ds, yyyy, h:MM:ss TT");

  this.apollo.mutate({ mutation: Query.addTemplate,
    variables: {
          
       
      author :this.template.author,
      title : this.template.title,
      content : this.template.content,
      image   : this.template.image,
      description : this.template.description,
      category : this.template.category,
      tags : this.template.tags,
      createdtime : this.template.createdtime



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
 * Delete  Templates
 * ----------------------------------------------------
 * @param id
 */

deleteTemplate(){

    var count = this.selectedLevel.length;
    for(var i=0; i<count; i++){
      var  _id = this.selectedLevel[i]._id;
      this.loadService.emitData();
      this.apollo.mutate({mutation : Query.deleteTemplate, 
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
 * Get All Templates
 * ----------------------------------------------------
 * @function getTemplates
 */

 

getTemplates(){


  this.apollo.watchQuery({query: Query.getTemplates})
  .valueChanges
  .map((result:any) => result.data.getTemplates).subscribe((data) =>{
       this.templates = data;
      //  console.log(this.templates)
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
