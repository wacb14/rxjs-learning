import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { delay, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';

  ngOnInit(): void {
    const values = of(2000, 1000, 3000);

    //-- Similar to concatMap, but this does not wait for observers to finish their executions.
    const merger = values.pipe(
      mergeMap((v) => of(`Value ${v}`).pipe(delay(v)))
    );

    merger.subscribe((v) => console.log(v));
  }
}
