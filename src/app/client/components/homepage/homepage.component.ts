import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';
import { ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  panelOpenState = false;
  showFiller = false;
  testimonalList:any;


  itemsPerSlide = 1;
  singleSlideOffset = false;
  noWrap = false;
  myInterval = 1500;
  homepage: boolean = false;
  slidesChangeMessage = '';

  constructor(public apollo: Apollo, private route: Router) { }


 @ViewChild('drawer', { static: false }) 
  drawer: MatSidenav;
  ngOnInit() {

    this.getTestimonals();

 
       console.log(this.route.url);
   


  }



  getTestimonals(){

  	this.apollo.watchQuery({ query: Query.getTestimonals})
  	.valueChanges
  .map((result:any) => result.data.getTestimonals).subscribe((data) =>{
   

    console.log(data);
    this.testimonalList = data;
    // this.loadService.emitData();
  })
  }

  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }

}
