import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero';
import { AboutComponent } from './about/about';
import { ProjectsComponent } from './projects/projects';
import { SkillsComponent } from './skills/skills';
import { ContactComponent } from './contact/contact';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent, 
    ContactComponent,
    FooterComponent,
  ],
})
export class AppComponent {}
