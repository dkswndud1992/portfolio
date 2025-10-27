import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero';
import { AboutComponent } from './about/about';
import { ProjectsComponent } from './projects/projects';
import { SkillsComponent } from './skills/skills';
import { ContactComponent } from './contact/contact';
import { FooterComponent } from './footer/footer';
import { HeaderComponent } from './header/header';
import { AuthService } from './auth';

import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent, 
    ContactComponent,
    FooterComponent,
  ],
})
export class AppComponent implements OnInit {
  unlocked$: Observable<boolean>;


  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.unlocked$ = this.authService.unlocked$;
  }

  ngOnInit(): void {
    // Check for password in query params on initial load
    this.route.queryParams.subscribe(params => {
      const password = params['password'];
      if (password) {
        this.authService.checkPassword(password);
      }
    });

  }

  promptForPassword(): void {
    const password = prompt('Please enter the password to unlock:');
    if (password) {
      this.authService.checkPassword(password);
    }
  }
}
