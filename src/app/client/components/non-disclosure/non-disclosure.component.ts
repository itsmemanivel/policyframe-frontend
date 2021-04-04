import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { CopyClipboardDirective }  from '../services/copy-clipboard.directive';

@Component({
  selector: 'app-non-disclosure',
  templateUrl: './non-disclosure.component.html',
  styleUrls: ['./non-disclosure.component.css']
})
export class NonDisclosureComponent implements OnInit {


copiedText = '';
  companyName: string;
  WebUrl: string;
  generated: boolean =false;
  value:string;
  CEO: string;
  companyAddress: string;
  registerNumber: string;
  date: string
  eventName: string;

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
