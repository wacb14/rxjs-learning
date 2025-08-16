import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';
  ngOnInit(): void {
    //-- Similar to setInterval but with observables
    const time = 1000;
    const trigger = interval(time);

    trigger.subscribe((n) =>
      console.log(`This is triggered after ${n} seconds`)
    );
  }
}
