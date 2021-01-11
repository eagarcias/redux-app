import { AppState } from './app.reducers';
import { IncrementAction, DecrementtAction } from './counter/counter.actions';
import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number;

  constructor( private store: Store<AppState> ){
    //this.counter = 10;
    this.store.select('counter').subscribe(state => {
      this.counter = state;
    });
  }

  add(){
    //this.counter += 1;
    const action = new IncrementAction();
    this.store.dispatch(action);
  }

  substract(){
    //this.counter -= 1;
    const action = new DecrementtAction();
    this.store.dispatch(action);
  }

}
