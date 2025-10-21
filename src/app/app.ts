import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero';
import { AboutComponent } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, AboutComponent],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
  `,
  styleUrls: ['./app.css']
})
export class App {}
