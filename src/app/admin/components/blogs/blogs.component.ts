import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';
import {MatDialog} from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { AwsService } from '../../../aws/aws.service';
// import { onError } from 'apollo-link-error';
import { LoaderService } from '../../../shared/loader/loader.service'


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css',"../../../admin/shared.css"]
})
export class BlogsComponent implements OnInit {



  name: string;
  description: string;
  content: string;
  image: any;
  createdtime: Date; 

  selectedLevel=[];
  hideButton: number = 0;
  blogs: Array<any>;
  constructor(private apollo: Apollo,public dialog: MatDialog , private upload: AwsService, private loadService: LoaderService) { }

  ngOnInit(): void {

  }


   /**
 * ----------------------------------------------------
 * Dialog  Testimonals
 * ----------------------------------------------------
 * @method openDialog
 */
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogueComponent,{

      data: {name: this.name, description:this.description, content : this.content}

    });
    
    dialogRef.afterClosed().subscribe(data =>      {


         this.loadService.emitData();


      if(data){

        this.name = data[0].name;
        this.description = data[0].description;
        this.content = data[0].content;

       

       var  file = data.slice(1);

       this.upload.uploadImge(file[0]).subscribe(data =>{

         this.image = data.Location;

    
        // this.addTestimonal();
        


       }, error =>{

            console.log("error");
       })
       }
    });
    

  }












   /**
 * ----------------------------------------------------
 * Add  Ebooks
 * ----------------------------------------------------
 * @method addEbooks
 */

addTestimonal(){



   let dateFormat = require('dateformat');
   let now = new Date();
   this.createdtime = dateFormat(now, "dddd, mmmm ds, yyyy, h:MM:ss TT");

  this.apollo.mutate({ mutation: Query.addTestimonal,
    variables: {
          
       
      author :this.name,
      content : this.content,
      image   : this.image,
      description : this.description,
      createdtime : this.createdtime
    

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

    var count = this.selectedLevel.length;
    for(var i=0; i<count; i++){
      var  _id = this.selectedLevel[i]._id;
      this.apollo.mutate({mutation : Query.deleteTestimonal, 
        variables:{
        _id:_id
        }})
      .subscribe(({data}) =>{

        window.location.reload();
      },
      error =>{ 
        console.log("there was an error sending the query", error);

      })


    }


}














/**
 * ----------------------------------------------------
 * Get All Blogs
 * ----------------------------------------------------
 * @function getBlogs
 */

 

getBlogs(){


  this.apollo.watchQuery({query: Query.getBlogs})
  .valueChanges
  .map((result:any) => result.data.getBlogs).subscribe((data) =>{
       this.blogs = data;
       console.log(this.blogs)
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
