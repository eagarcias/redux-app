import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { DivideAction, MultiplyAction } from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {

 counter: number;
  

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }

  multiply(){
    //this.counter *= 2;
    //this.newCounter.emit(this.counter);
    const action = new MultiplyAction(5);
    this.store.dispatch(action);
  }

  divide(){
    //this.counter /= 2;
    //this.newCounter.emit(this.counter);
    const action = new DivideAction(5);
    this.store.dispatch(action);
  }

  resetCounter(newCounter){
    this.counter= newCounter;
    //this.newCounter.emit(this.counter);
  }

}
