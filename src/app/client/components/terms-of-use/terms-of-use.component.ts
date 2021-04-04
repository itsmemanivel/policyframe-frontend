import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { CopyClipboardDirective }  from '../services/copy-clipboard.directive';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.css']
})
export class TermsOfUseComponent implements OnInit {
  

  copiedText = '';
  companyName: string;
  WebUrl: string;
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
