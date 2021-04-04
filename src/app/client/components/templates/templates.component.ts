import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';
import { ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {


   templateList:any;
  constructor(public apollo: Apollo, private route: Router) { }

  ngOnInit(): void {



  	this.getTemplates();
  }





   /**
 * ----------------------------------------------------
 * Get All Templates
 * ----------------------------------------------------
 * @function getTemplates
 */

getTemplates(){

  // this.loadService.emitData();

  this.apollo.watchQuery({ query: Query.getTemplates})
  .valueChanges
  .map((result:any) => result.data.getTemplates).subscribe((data) =>{
   

    // console.log(data);
    this.templateList = data;
    // this.loadService.emitData();
  })

 }


}
