import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-embed-videos',
  templateUrl: './embed-videos.component.html',
  styleUrls: ['./embed-videos.component.css']
})
export class EmbedVideosComponent implements OnInit {


  videoList: any;
  constructor(public apollo: Apollo, private route: Router) { }

  ngOnInit(): void {


    this.getEmbedVideos();
  }



   /**
 * ----------------------------------------------------
 * Get All Videos
 * ----------------------------------------------------
 * @function getEbooks
 */

getEmbedVideos(){

  // this.loadService.emitData();

  this.apollo.watchQuery({ query: Query.getEmbedVideos})
  .valueChanges
  .map((result:any) => result.data.getEmbedVideos).subscribe((data) =>{
   

    // console.log(data);
    this.videoList = data;
    // this.loadService.emitData();
  })

 }

}
