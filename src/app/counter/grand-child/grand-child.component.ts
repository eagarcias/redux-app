import { ResetAction } from './../counter.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit} from '@angular/core';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styles: [
  ]
})
export class GrandChildComponent implements OnInit {
  
  counter: number;
  

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(state => {
      this.counter = state;
    });
  }

  reset(){
    // this.counter = 0;
    // this.newCounter.emit(this.counter);
    const action = new ResetAction();
    this.store.dispatch(action);
  }

}
