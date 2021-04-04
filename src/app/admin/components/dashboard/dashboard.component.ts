import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../../graphql/global-query';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../admin/shared.css']
})
export class DashboardComponent implements OnInit {


  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels = ['Testimonals', 'Ebooks', 'Videos', 'PPT'];
  public pieChartData:any;
  public pieChartType = 'pie';
  public pieChartColors = [
    {
      backgroundColor: ['#4e73df', '#1cc88a', '#17a2b8', '#ffc107'],
    },
  ];
  public pieChartLegend = true;



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  testimonalsCount: number;
  clientsCount: number = 0;
  adminsCount: number = 0;
  ebooksCount: number;
  embedVideosCount: number;
  pptsCount: number;
  templatesCount: number;
  blogsCount: number;
  constructor( private apollo: Apollo) { }

  async ngOnInit() {
    this.getTestimonalsCount();
    this.getUsersCount();
    this.getEbooksCount();
    this.getEmbedVideosCount();
    this.getPptsCount();
    this.getTemplatesCount();
    this.getBlogsCount();    

  }


 /**
 * ----------------------------------------------------
 * Get Testimonals Count
 * ----------------------------------------------------
 * @function getTestimonalsCount
 */
async getTestimonalsCount(){
    this.apollo.watchQuery({ query: Query.getTestimonals })
    .valueChanges
    .map((result:any)=> result.data.getTestimonals).subscribe((data) =>{
      this.testimonalsCount = data.length;

    })
   

  }


   /**
 * ----------------------------------------------------
 * Get Users Count
 * ----------------------------------------------------
 * @function getUsersCount
 */
async getUsersCount(){
 
  this.apollo.watchQuery({ query: Query.getUsers })
  .valueChanges
  .map((result:any)=> result.data.getUsers).subscribe((data) =>{
    const length = data.length;
    for (var i = 0; i < length; i++){
      if(data[i].role ===  "admin"){

        this.adminsCount++;
      
      }else { 
        this.clientsCount++;
         }
    }

  })

}

 /**
 * ----------------------------------------------------
 * Get Ebooks Count
 * ----------------------------------------------------
 * @function getEbooksCount
 */
async getEbooksCount(){
 
  this.apollo.watchQuery({ query: Query.getEbooks })
  .valueChanges
  .map((result:any)=> result.data.getEbooks).subscribe((data) =>{
    this.ebooksCount = data.length;
  })

}

 /**
 * ----------------------------------------------------
 * Get EmbedVideos Count
 * ----------------------------------------------------
 * @function getEmbedVideosCount
 */
async getEmbedVideosCount(){
 
  this.apollo.watchQuery({ query: Query.getEmbedVideos })
  .valueChanges
  .map((result:any)=> result.data.getEmbedVideos).subscribe((data) =>{
    this.embedVideosCount = data.length;
  })

}

 /**
 * ----------------------------------------------------
 * Get Ppts Count
 * ----------------------------------------------------
 * @function getPptsCount
 */
async getPptsCount(){
 
  this.apollo.watchQuery({ query: Query.getPpts })
  .valueChanges
  .map((result:any)=> result.data.getPpts).subscribe((data) =>{
    this.pptsCount = data.length;
  })

}

 /**
 * ----------------------------------------------------
 * Get Templates Count
 * ----------------------------------------------------
 * @function getTemplatesCount
 */
async getTemplatesCount(){
 
  this.apollo.watchQuery({ query: Query.getTemplates })
  .valueChanges
  .map((result:any)=> result.data.getTemplates).subscribe((data) =>{
    this.templatesCount = data.length;
  })

}

 /**
 * ----------------------------------------------------
 * Get Blogs Count
 * ----------------------------------------------------
 * @function getBlogsCount
 */
async getBlogsCount(){
 
  this.apollo.watchQuery({ query: Query.getBlogs })
  .valueChanges
  .map((result:any)=> result.data.getBlogs).subscribe((data) =>{
    this.blogsCount = data.length;
  })

}





 

}
