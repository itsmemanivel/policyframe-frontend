import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { CopyClipboardDirective }  from '../../services/copy-clipboard.directive';

@Component({
  selector: 'app-gdpr-privacy-policy',
  templateUrl: './gdpr-privacy-policy.component.html',
  styleUrls: ['./gdpr-privacy-policy.component.css']
})
export class GdprPrivacyPolicyComponent implements OnInit {




  copiedText = '';
  companyName: string;
  companyNumber: number;
  
  WebUrl: string;
  companyEmail: string;


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
