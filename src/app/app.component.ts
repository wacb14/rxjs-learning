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
    //-- A more complex example to make a directory of resources
    const src = forkJoin({
      google: ajax.getJSON('https://api.github.com/users/google'),
      myGit: ajax.getJSON('https://api.github.com/users/wacb14'),
    });

    src.subscribe((res) => console.log(res));
  }
}
