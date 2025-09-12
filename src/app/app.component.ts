import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mergeMap } from 'rxjs';
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
    //-- In this way we can chain multiple requests if the next depends on the content of the previous
    ajax
      .getJSON('https://api.github.com/users/ctmil')
      .pipe(
        //-- We could use concatMap as well if the order was important
        mergeMap((res: any) => ajax(res.blog)) //-- Depends of blog from ctmil
        // mergeMap((blog: any) => ajax(blog.name)), //-- It would depend on name from blog, and so on.
      )
      .subscribe({
        next: (final: any) => console.log(final.status),
        error: (e) => console.error(e),
      });
  }
}
