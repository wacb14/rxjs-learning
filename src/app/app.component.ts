import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';
  ngOnInit(): void {
    //-- Similar to setTimeout but with observables
    const time = 3000;
    const trigger = timer(time);

    trigger.subscribe(() =>
      console.log(`This was triigered after ${time/1000} seconds`)
    );
  }
}
