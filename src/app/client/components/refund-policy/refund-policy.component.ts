import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { CopyClipboardDirective }  from '../services/copy-clipboard.directive';

@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.component.html',
  styleUrls: ['./refund-policy.component.css']
})
export class RefundPolicyComponent implements OnInit {
  
  copiedText = '';
  companyName: string;
  WebUrl: string;
  generated: boolean =false;
  value:string;
  returnDays: number;
  companyEmail: string;
  companyAddress: string;
  companyNumber: string;
  refundDays: string;
  last_updated: string;

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
