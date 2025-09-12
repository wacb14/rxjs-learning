import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { delay, mergeMap, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';

  ngOnInit(): void {
    const sources = of(
      ajax.getJSON('https://api.github.com/users/wacb14'),
      ajax.getJSON('https://api.github.com/users/google')
    );

    const merger = sources.pipe(mergeMap((v) => v));

    merger.subscribe((v) => console.log(v));
  }
}
