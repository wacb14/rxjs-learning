import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';
  public ngOnInit(): void {
    const element = document.getElementById('element') as HTMLDivElement;
    //-- Converts an event as an observable to be able to subscribe and unsubscribe
    const mouseEvent = fromEvent(element, 'mousemove');
    mouseEvent.subscribe((e: any) => {
      console.log(`Coords X:${e.clientX} and Y:${e.clientY}`);
    });
  }
}
