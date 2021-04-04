import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageData'
})
export class ImageDataPipe implements PipeTransform {

  transform(value: String,length: number): String {

    const biggestWord = 5;
    const elipses = '...';

    if(typeof value === "undefined") return value;
    if(value.length <= length) return value;

    //truncate to about correct length
    let truncatedText = value.slice(0, length+ biggestWord );

    //now nibble ends till correct length
    while(truncatedText.length > length - elipses.length){

      let lastSpace = truncatedText.lastIndexOf(" ");
      if(lastSpace === -1) break;
      truncatedText =truncatedText.slice(0, lastSpace).replace(/[!,.?;:]$/,'');
    }
    return truncatedText + elipses;
  }

}
