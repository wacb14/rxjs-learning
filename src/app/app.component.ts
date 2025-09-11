import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { concatMap, delay, of } from 'rxjs';

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
    //-- Concatenates the values of an observable to a new and unique observable
    const maper = values.pipe(
      concatMap((v) => of(`Value ${v}`).pipe(delay(v)))
    );

    maper.subscribe((v) => console.log(v));
  }
}
