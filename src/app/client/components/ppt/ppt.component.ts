import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { LoaderService } from '../../../shared/loader/loader.service';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {


  pptList: any;
  constructor(public apollo: Apollo, private route: Router, public loadService: LoaderService) { }

  ngOnInit(): void {

    this.loadService.emitData();

    this.getPPt();
  }


  /**
 * ----------------------------------------------------
 * Get All ppt
 * ----------------------------------------------------
 * @function getPPt
 */

getPPt(){

  // this.loadService.emitData();

  this.apollo.watchQuery({ query: Query.getPpts})
  .valueChanges
  .map((result:any) => result.data.getPpts).subscribe((data) =>{
   

    // console.log(data);
    this.pptList = data;
        this.loadService.emitData();

    // this.loadService.emitData();
  })

 }

}
