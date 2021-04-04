import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { CopyClipboardDirective }  from '../services/copy-clipboard.directive';

@Component({
  selector: 'app-disclaimer-policy',
  templateUrl: './disclaimer-policy.component.html',
  styleUrls: ['./disclaimer-policy.component.css']
})
export class DisclaimerPolicyComponent implements OnInit {
 

  copiedText = '';
  companyName: string;
  WebUrl: string;
  generated: boolean =false;
  value:string;
  publishYear: string;
  registerNo: string;
  companyAddress:string;
  vatNo: string;
  CEO: string;

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
