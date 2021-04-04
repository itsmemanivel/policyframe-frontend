import { Directive } from '@angular/core';

@Directive({
  selector: '[appCopyClipboard]'
})
export class CopyClipboardDirective {

  constructor() { }





 copyText(){

  	let selBox = document.createElement('textarea');
  	selBox.style.position = 'fixed';
  	selBox.style.left = '0';
  	selBox.style.top = '0';
  	selBox.style.opacity = '0';
    var copyText = document.getElementById("container");
    selBox.value = copyText.innerText.trim();
  	document.body.appendChild(selBox);
  	selBox.focus();
  	selBox.select();
  	document.execCommand('copy')  ;
  	document.body.removeChild(selBox);
  }


  copyHtml(){

  
    let textarea = document.querySelector("textarea");
    textarea.select();
  	document.execCommand('copy')  ;
  }

  
}
