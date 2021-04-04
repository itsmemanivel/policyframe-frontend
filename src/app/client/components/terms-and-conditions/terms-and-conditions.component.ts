import { Component, OnInit, ViewChild } from '@angular/core';
import { CopyClipboardDirective }  from '../services/copy-clipboard.directive';


@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {


 copiedText = '';

  companyName: string;
  WebUrl: string;
  publishYear: string;
  companyAddress: string;
  companyNumber:string;
  registerNumber: string;
  vatNumber: string;
  CEO: string;


  generated: boolean =false;
  value:string;

  @ViewChild(CopyClipboardDirective) dir;
  constructor() { }

  ngOnInit(): void {
  }




   copyText(){

    this.dir.copyText();
  }

  copyHtml(){


    this.dir.copyHtml();
  }
  

    generate(){

    this.generated = true;
  console.log(this.companyName , this.WebUrl);
    }

}
