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
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');

    const intervalObs = interval(1000).pipe(map(() => -1));
    const pause = fromEvent(pauseButton as any, 'click').pipe(map(() => false));
    const resume = fromEvent(resumeButton as any, 'click').pipe(
      map(() => true)
    );

    const timer = merge(pause, resume).pipe(
      startWith(true),
      switchMap((v) => (v ? intervalObs : EMPTY)),
      scan((sum, i) => (i ? sum + i : sum), 10),
      takeWhile((i) => i >= 0)
    );

    timer.subscribe((value: any) => (this.counter = value));
  }
}
