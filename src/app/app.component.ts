import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { forkJoin, interval, of, take, timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';

  ngOnInit(): void {
    //-- The forkJoin operator returns the last value of each observable, waiting for the last observable that emits the last value (it ignores the previous values of each observable)
    const fork = forkJoin([
      of('Hola'),
      interval(1000).pipe(take(2)),
      of('Mundo').pipe(timeout(500)),
    ]);

    fork.subscribe((c) => console.log(c));
  }
}
