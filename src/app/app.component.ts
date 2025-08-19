import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, map, of, pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';
  ngOnInit(): void {
    const numbers = of(1, 2, 3, 4, 5, 6, 7, 8, 9);

    const evenSquared = pipe(
      filter((n: number) => n % 2 === 0),
      map((n) => n * n)
    );

    const squared = evenSquared(numbers);

    squared.subscribe((e) => console.log(e));
  }
}
