import { ChangeDetectorRef,Component, OnInit, Output } from '@angular/core';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';
import {MatDialog} from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { AwsService } from '../../../aws/aws.service';
// import { onError } from 'apollo-link-error';
import { LoaderService } from '../../../shared/loader/loader.service'
import { Ebook } from '../types';


@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['../../../admin/shared.css']
})
export class EbookComponent implements OnInit {
 

  // name: string;
  // description: string;
  // title: string;
  // content: string;
  // image: any;
  // category: string;
  // tags:[];
  // createdtime: Date; 




  selectedLevel=[];
  hideButton: number = 0;
  ebooks: Ebook = new Ebook();
  ebookList: any;
 
constructor(public apollo: Apollo,public dialog: MatDialog , private upload: AwsService, 
              public loadService: LoaderService,
              private _changeDetectionRef : ChangeDetectorRef
              ) { }

  ngOnInit(): void {

    this.getEbooks();
  }




   /**
 * ----------------------------------------------------
 * Dialog  Ebooks
 * ----------------------------------------------------
 * @method openDialog
 */
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogueComponent,{

      data: {author: this.ebooks.author, description:this.ebooks.description, title: this.ebooks.title, content : this.ebooks.content, category: this.ebooks.category, tags:this.ebooks.tags}

    });
    
    dialogRef.afterClosed().subscribe(data =>      {


      if(data){


        this.ebooks = data[0];

        // console.log(this.ebooks);
         this.loadService.emitData();

        // this.ebooks.author = data[0].author;
        // this.ebooks.title  = data[0].title
        // this.ebooks.description = data[0].description;
        // this.ebooks.category = data[0].category;
        // this.ebooks.tags = ["sample", "test"];
         
       
         var  file = data[0].image;


       this.upload.uploadEbook(data[0].content).subscribe(data =>{

         this.ebooks.content = data.Location;

        

         this.upload.uploadImge(file).subscribe(data =>{

         this.ebooks.image = data.Location;



    
        this.addEbooks();
        


       }, error =>{

            console.log("PDF error ");
       })



       }, error =>{

            console.log("IMAGE error");
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

addEbooks(){



   let dateFormat = require('dateformat');
   let now = new Date();
   this.ebooks.createdtime = dateFormat(now, "dddd, mmmm ds, yyyy, h:MM:ss TT");

  this.apollo.mutate({ mutation: Query.addEbook,
    variables: {
          
       
      author :this.ebooks.author,
      title : this.ebooks.title,
      content : this.ebooks.content,
      image   : this.ebooks.image,
      description : this.ebooks.description,
      category : this.ebooks.category,
      tags : this.ebooks.tags,
      createdtime : this.ebooks.createdtime
    

      }}).subscribe(data =>{

          this.loadService.emitData();
          window.location.reload();
      })


   // console.log(this.ebooks);



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

deleteEbooks(){
        

    var count = this.selectedLevel.length;
    for(var i=0; i<count; i++){
      var  _id = this.selectedLevel[i]._id;
      this.loadService.emitData();
      this.apollo.mutate({mutation : Query.deleteEbook, 
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
 * Get All Ebooks
 * ----------------------------------------------------
 * @function getEbooks
 */

getEbooks(){

  // this.loadService.emitData();

  this.apollo.watchQuery({ query: Query.getEbooks})
  .valueChanges
  .map((result:any) => result.data.getEbooks).subscribe((data) =>{
   

    // console.log(data);
    this.ebookList = data;
    // this.loadService.emitData();
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
