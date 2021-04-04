import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';
import { ActivatedRoute, Params, Router} from '@angular/router';



@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.css']
})
export class EbooksComponent implements OnInit {


  ebookList:any;

  constructor(public apollo: Apollo, private route: Router) { }

  ngOnInit(): void {

    this.getEbooks();

  }



   /**
 * ----------------------------------------------------
 * Get All Ebooks
 * ----------------------------------------------------
 * @function getEbooks
 */

getEbooks(){

  // this.loadService.emitData();

  this.apollo.watchQuery({ query: Query.getEbooks})
  .valueChanges
  .map((result:any) => result.data.getEbooks).subscribe((data) =>{
   

    // console.log(data);
    this.ebookList = data;
    // this.loadService.emitData();
  })

 }

}
