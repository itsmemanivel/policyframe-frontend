import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {AuthService } from '../shared/services/auth.service';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../graphql/global-query';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  // loginForm: FormGroup;
  //    loading = false;
  //    submitted = false;
  //    returnUrl: string;
  //    error = '';

   email: string;
   password: string;

  constructor(private authService: AuthService, private route: ActivatedRoute,
        private router: Router, private formBuilder: FormBuilder,public apollo: Apollo) {

          if (this.authService.currentUserValue) {
             this.router.navigate(['/admin']);
         }
        }

  ngOnInit(): void {

    // this.loginForm = this.formBuilder.group({
    //            username: ['', Validators.required],
    //            password: ['', Validators.required]
    //        });

           // get return url from route parameters or default to '/'


  }

submit(){


// this.apollo.watchQuery({ query: Query.getUserByEmail, 
// variables:{

//     email: this.email
// }})
//   .valueChanges
//   .map((result:any) => result.data.getUserByEmail).subscribe((data) =>{
   

//     console.log(data);
//   })


this.authService.login(this.email, this.password);

 



}


}
