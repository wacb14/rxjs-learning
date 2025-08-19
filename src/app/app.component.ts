import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    //-- Tap might be used to debug, but mainly it is used to apply side effects to keep clean main functions as map or merge
    const positions = clicks.pipe(tap((ev) => console.log('Processed: ', ev)));

    positions.subscribe({
      next: (pos) => console.log('Next: ', pos),
      error: (err) => console.error('Error: ', err),
      complete: () => console.log('Completed'),
    });
  }
}
