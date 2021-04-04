import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { CopyClipboardDirective }  from '../services/copy-clipboard.directive';

@Component({
  selector: 'app-eula-policy',
  templateUrl: './eula-policy.component.html',
  styleUrls: ['./eula-policy.component.css']
})
export class EULAPolicyComponent implements OnInit {

  copiedText = '';
  companyName: string;
  WebUrl: string;
  date: string;
  eventName; string;
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
