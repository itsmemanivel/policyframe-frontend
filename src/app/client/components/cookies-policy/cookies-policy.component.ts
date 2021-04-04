import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { CopyClipboardDirective }  from '../services/copy-clipboard.directive';

@Component({
  selector: 'app-cookies-policy',
  templateUrl: './cookies-policy.component.html',
  styleUrls: ['./cookies-policy.component.css']
})
export class CookiesPolicyComponent implements OnInit {


  copiedText = '';
  companyName: string;
  WebUrl: string;
  companyAddress: string;
  CEO: string;
  companyNumber: number;


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



