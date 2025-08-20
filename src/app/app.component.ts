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
  title = 'rxjs-learning';
  ngOnInit(): void {
    const observable = new Observable((e) => {
      e.next(1);
      e.next('Hola mundo');
      e.next(3);
      // e.error('Error Nro 1'); //-- It is possible to handle error manually
      e.complete();
    });

    const subscription = observable.subscribe({
      next: (x) => console.log(`El siguiente valor es ${x}`),
      error: (x) => console.error(`Error: ${x}`),
      complete: () => console.log('Operation was completed successfully!'),
    });

    subscription.unsubscribe();
  }
}
