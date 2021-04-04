import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { Router, ActivatedRoute } from '@angular/router';

import { DeviceDetectorService } from 'ngx-device-detector';
import { LoaderService } from '../../shared/loader/loader.service'
import { AuthService } from '../../shared/services/auth.service'


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ["../../admin/shared.css"]
})

export class AdminDashboardComponent implements OnInit {

  deviceInfo = null;
  admin: any;
  
  constructor(private router: Router,public sidebar:SidebarService, public loadService: LoaderService ,private deviceService: DeviceDetectorService,

            public authService: AuthService
    ) { 
  
  

  }


  ngOnInit(): void {

    this.epicFunction();
      // console.log(this.authService.currentUserValue);

      this.admin = this.authService.currentUserValue;

  }



  sidebartoggle(){

     this.sidebar.emitData();
       

  }


  epicFunction(){

    this.deviceInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
      // console.log(this.deviceInfo);
      // console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
      // console.log(isTablet);  // returns if the device us a tablet (iPad etc)
      // console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  }



logout(){

   this.authService.logout();
window.location.reload();
}
}
