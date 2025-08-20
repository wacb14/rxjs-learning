import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { concat, interval, range, take } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';
  ngOnInit(): void {
    //-- "Take" limits the first ("n") 4 values emitted by the observable (remember that interval emits infinite values)
    const timer = interval(1000).pipe(take(4));
    const range1 = range(1, 10).pipe();
    //-- Chains the results in a sequence of several observables and returns a new one (the limit is up to 100 observable)
    const concatenated = concat(timer, range1);

    concatenated.subscribe((x) => console.log(x));
  }
}
