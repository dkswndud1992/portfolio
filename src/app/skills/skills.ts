import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {}
