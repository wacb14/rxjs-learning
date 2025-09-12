import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { forkJoin } from 'rxjs';
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
    //-- forkJoin can be used to make multiple HTTP API requests and return the response from each one as an array.
    forkJoin([
      ajax.getJSON('https://api.github.com/users/wacb14'),
      ajax.getJSON('https://api.github.com/users/google'),
    ]).subscribe((v) => console.log(v));
  }
}
