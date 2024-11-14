import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    TestComponent,
  ],
  template: `
    <main>
      <header class="brand-name">
        <img  width="50px" class="brand-logo" src="/assets/sachin.jpeg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
        <app-test></app-test>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/