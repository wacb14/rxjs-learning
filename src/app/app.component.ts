import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  EMPTY,
  fromEvent,
  interval,
  map,
  merge,
  scan,
  startWith,
  switchMap,
  takeWhile,
} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';
  counter = 0;

  ngOnInit(): void {
    //-- Get the buttons
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');
    //-- Make the observable counter to rest 1 in each iteration
    const intervalObs = interval(1000).pipe(map(() => -1));
    //-- Observables to change the "v" value to stop and resume the iterations
    const pause = fromEvent(pauseButton as any, 'click').pipe(map(() => false));
    const resume = fromEvent(resumeButton as any, 'click').pipe(
      map(() => true)
    );
    //-- Merge both observables and force the start of the counter with startWith. Then use switchMap to change between the counter and an empty observable. Next use scan to sum the counter with the initial value (similar to reduce from JS). Finally, use takeWhile to take the value meanwhile the condition is true
    const timer = merge(pause, resume).pipe(
      startWith(true),
      switchMap((v) => (v ? intervalObs : EMPTY)),
      scan((sum, i) => (i ? sum + i : sum), 10),
      takeWhile((i) => i >= 0)
    );
    //-- Subscribe and show the counter
    timer.subscribe((value: any) => (this.counter = value));
  }
}
