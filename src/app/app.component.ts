import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, share, tap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';

  ngOnInit(): void {
    const time = timer(1000);

    const obs = time.pipe(
      tap(() => console.log('Tap is on')),
      map(() => 'End of obs')
    );

    const obs1 = obs.subscribe((val) => console.log(val));
    const obs2 = obs.subscribe((val) => console.log(val));

    //-- The original observable is shared (multicast) to subscribers
    const sharedObs = obs.pipe(share());

    const obs3 = sharedObs.subscribe((val) => console.log(val));
    const obs4 = sharedObs.subscribe((val) => console.log(val));
  }
}
