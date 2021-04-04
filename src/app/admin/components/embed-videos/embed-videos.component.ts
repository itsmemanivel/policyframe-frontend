import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';
import {MatDialog} from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { AwsService } from '../../../aws/aws.service';
// import { onError } from 'apollo-link-error';
import { LoaderService } from '../../../shared/loader/loader.service'

import {  EmbedVideo } from '../types';

@Component({
  selector: 'app-embed-videos',
  templateUrl: './embed-videos.component.html',
  styleUrls: ["../../../admin/shared.css"]
})
export class EmbedVideosComponent implements OnInit {
  
  // name: string;
  // description: string;
  // content: string;
  // image: any;
  // createdtime: Date; 

  selectedLevel=[];
  hideButton: number = 0;
  embedVideos: Array<any>
  embedVideo: EmbedVideo = new EmbedVideo();
  constructor(public apollo: Apollo,public dialog: MatDialog , private upload: AwsService, public loadService: LoaderService) { }

  

  ngOnInit(): void {
    this.getEmbedVideos();
  }



   /**
 * ----------------------------------------------------
 * Dialog  EmbedVideo
 * ----------------------------------------------------
 * @method openDialog
 */
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogueComponent,{

      data: {name: this.embedVideo.author, description:this.embedVideo.description, content : this.embedVideo.content}

    });
    
    dialogRef.afterClosed().subscribe(data =>      {




      if(data){

        this.loadService.emitData();


        this.embedVideo = data[0];
        var  file = data[0].image;

       

        // console.log(this.embedVideo);

       this.upload.uploadImge(this.embedVideo.image).subscribe(data =>{

         this.embedVideo.image = data.Location;

    
        this.addEmbedVideo();


        


       }, error =>{

            console.log("error");
       })
       }
    });
    

  }




     /**
 * ----------------------------------------------------
 * Add  EmbedVideos
 * ----------------------------------------------------
 * @method addEmbedVideo
 */

addEmbedVideo(){



   let dateFormat = require('dateformat');
   let now = new Date();
   this.embedVideo.createdtime = dateFormat(now, "dddd, mmmm ds, yyyy, h:MM:ss TT");


  this.apollo.mutate({ mutation: Query.addEmbedVideo,
    variables: {
          
       
      author :this.embedVideo.author,
      title: this.embedVideo.title,
      content : this.embedVideo.content,
      image   : this.embedVideo.image,
      description : this.embedVideo.description,
      category: this.embedVideo.category,
      tags: this.embedVideo.tags,
      createdtime : this.embedVideo.createdtime
    

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

deleteTestimonals(){

    this.loadService.emitData();

    var count = this.selectedLevel.length;
    for(var i=0; i<count; i++){
      var  _id = this.selectedLevel[i]._id;
      console.log(_id);
      this.apollo.mutate({mutation : Query.deleteEmbedVideo, 
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
 * Get All EmbedVideos
 * ----------------------------------------------------
 * @method getEmbedVideos
 */

 getEmbedVideos(){

  this.apollo.watchQuery({ query: Query.getEmbedVideos})
  .valueChanges
  .map((result:any) => result.data.getEmbedVideos).subscribe((data) =>{
    this.embedVideos = data;
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
