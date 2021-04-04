import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';
import { MatSelectChange } from '@angular/material/select';
import { TestimonalsComponent } from '../../components/testimonals/testimonals.component';
import { ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

import { Testimonal, Ebook, EmbedVideo, PPT, Template, User } from '../types';

export interface DialogData {
  testimonal: Testimonal 
  ebook: Ebook;
  embedVideo: EmbedVideo;
  ppt: PPT;
  template: Template ;
}

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  
  options = ["Art","Biology","Chemical","Doctrate","EggHead","Future","Gross","High","Inject","Jackpot","Kilo","Love","Mordern","Nature","Technology"];
  image:any;

  imageSrc:any;

 


  params: Params;
  header: string;
  url:string;



  testimonalDialog: boolean =false;
  
  ebookDialog: boolean =false;

  embedVideoDialog: boolean =false;

  pptDialog: boolean =false;

  templateDialog: boolean =false;

  clientDialog: boolean = false;

  adminDialog: boolean = false;





   testimonal: Testimonal = new Testimonal();
   ebook: Ebook = new Ebook();
   embedVideo : EmbedVideo = new EmbedVideo();
   ppt: PPT = new PPT();
   template: Template = new Template();
   admin : User = new User();
   client: User = new User();
 

   arr: any;
   firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;   
  constructor(
    public dialogRef: MatDialogRef<DialogueComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData,
  private fb: FormBuilder,private router: Router
  ) { 
    // console.log(this.data);

  }



  onNoClick(): void {
    // this.dialogRef.close();

    console.log(this.ebook)

         

  }

   

  ngOnInit(): void {
      
   
        

       console.log(this.router.url);

       this.url = this.router.url;

       // if(this.url === "/admin/testimonals"){

       //   this.testimonalDialog = true;
       //   this.header = "Add Testimonal";
       // }



       switch (this.url) {
         case "/admin/testimonals":
           this.testimonalDialog = true;
           this.header = "Add Testimonal";
           break;

         case "/admin/ebooks":
           this.ebookDialog = true;
           this.header = "Add Ebook";
           break;

        case "/admin/embed-videos":
         this.embedVideoDialog = true;
           this.header = "Add Embed-Video";
         break;

        case "/admin/ppt":
         this.pptDialog = true;
           this.header = "Add PPT";
         break;

         case "/admin/templates":
         this.templateDialog = true;
           this.header = "Add Template";
         break;

          case "/admin/list-clients":
         this.clientDialog = true;
           this.header = "Add Client";
         break;

          case "/admin/list-admins":
         this.adminDialog = true;
           this.header = "Add Admin";
         break;

         
         default:
           // code...
           break;
       }


     
 
  
  }


  displayPhoto(event){

    
    let reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        
        this.imageSrc = reader.result;
      };
    }


    this.testimonal.image = event.target.files[0];
    this.ebook.image = event.target.files[0];
    this.embedVideo.image = event.target.files[0];
    this.ppt.image = event.target.files[0];
    this.template.image = event.target.files[0];
    this.client.image = event.target.files[0];
    this.admin.image = event.target.files[0];

  

  }

  contentFile(event){

       this.ebook.content = event.target.files[0];
       this.ppt.content = event.target.files[0];
       this.template.content = event.target.files[0];



  }

  categoryChange(event: MatSelectChange){

    this.ebook.category = event.value
    this.embedVideo.category = event.value
    this.ppt.category = event.value;
    this.template.category = event.value;




  }

}
