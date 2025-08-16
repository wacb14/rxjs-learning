import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
  outputs: any[] = [];

  ngOnInit(): void {
    this.outputs.push('just before subscribe');
    this.observable.subscribe({
      next: (x) => {
        this.outputs.push('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete: () => {
        this.outputs.push('done');
      },
    });
    this.outputs.push('just after subscribe');
  }
}
