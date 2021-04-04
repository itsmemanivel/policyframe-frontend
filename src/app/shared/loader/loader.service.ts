import { Subject } from 'rxjs';
import { EventEmitter,Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

private toggleState = new Subject();
  public toggleState$ = this.toggleState.asObservable();
  public toggleVal = false;

  constructor() { }


 

emitData(){
   this.toggleVal = !this.toggleVal;
   this.toggleState.next(this.toggleVal);
}
}