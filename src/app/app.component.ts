import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, map, of, pipe, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';

  discarted: number[] = [];

  ngOnInit(): void {
    const numbers = of(1, 2, 3, 4, 5, 6, 7, 8, 9);

    //-- Filter allows to chain multiple operators and creates a new observer with the results of the operations
    const newObserver = numbers.pipe(
      filter((e) => {
        if (e % 2 === 0) return true;
        else {
          this.discarted.push(e);
          return false;
        }
      }),
      map((e) => e * 2)
    );

    newObserver.subscribe((e) => console.log(e));
    console.log('Saved ' + this.discarted);
  }
}
