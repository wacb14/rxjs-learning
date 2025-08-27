import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';

  ngOnInit(): void {
    //-- SwitchMap allows to interrupt the function that we are mapping
    const count = fromEvent(document, 'click').pipe(
      switchMap(() => interval(1000))
    );
    //-- Every time we click on the document the counter restarts
    count.subscribe((n) => console.log(n));
  }
}
