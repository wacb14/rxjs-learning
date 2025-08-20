import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bufferTime, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';

  ngOnInit(): void {
    const timer = interval(500);
    //-- Retains values for an interval of a (2000 ms) and outputs them every b (1000 ms).
    const buffer = timer.pipe(bufferTime(2000,1000));

    buffer.subscribe((v) => console.log(v));
  }
}
