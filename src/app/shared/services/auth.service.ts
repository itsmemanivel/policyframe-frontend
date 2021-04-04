import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import * as Query from '../../graphql/global-query';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class User {

  _id: string;
  username: string;
  password: string;
  email: string;
  image:string;
  role: string;
  createdtime: string;
  token?:string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient,public apollo: Apollo,private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }



    // login(email: string, password: string) {
    //
    //   this.apollo.query({ query: Query.getUserByEmail,
    //     variables{
    //
    //       email: email
    //
    //     }}).subscribe (data =>{
    //
    //         window.location.reload();
    //         // this.loadService.emitData();
    //
    //     })
    //
    //             // localStorage.setItem('currentUser', JSON.stringify(user));
    //             // this.currentUserSubject.next(user);
    //             // return user;
    //
    // }



    login(email: string, password: string):any {

    
this.apollo.watchQuery({ query: Query.getUserByEmail, 
variables:{

    email: email
}})
  .valueChanges
  .map((result:any) => result.data.getUserByEmail).subscribe((data) =>{
   


    if(data.password === password && data.role ==="admin"){


       localStorage.setItem('currentUser', JSON.stringify(data));
       this.currentUserSubject.next(data);
       window.location.reload();

       return data;

    } else {
 
         this.logout();
        

    }
       



  })
      
  }
    logout():any {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }


    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


}
