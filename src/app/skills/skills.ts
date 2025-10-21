import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  badgeUrl: string;
  wikiUrl: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class SkillsComponent {
  backendSkills: Skill[] = [
    { name: 'Java', badgeUrl: 'https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Java_(programming_language)' },
    { name: 'Spring', badgeUrl: 'https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=spring&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Spring_Framework' },
    { name: 'Python', badgeUrl: 'https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Python_(programming_language)' },
    { name: 'Go', badgeUrl: 'https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Go_(programming_language)' }
  ];

  frontendSkills: Skill[] = [
    { name: 'JavaScript', badgeUrl: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black', wikiUrl: 'https://en.wikipedia.org/wiki/JavaScript' },
    { name: 'TypeScript', badgeUrl: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/TypeScript' },
    { name: 'HTML5', badgeUrl: 'https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/HTML5' },
    { name: 'CSS3', badgeUrl: 'https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/CSS' },
    { name: 'Angular', badgeUrl: 'https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Angular_(web_framework)' },
    { name: 'Flutter', badgeUrl: 'https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Flutter' }
  ];

  othersAndRoboticsSkills: Skill[] = [
    { name: 'ROS', badgeUrl: 'https://img.shields.io/badge/ROS-22314E?style=flat&logo=ros&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Robot_Operating_System' },
    { name: 'Docker', badgeUrl: 'https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Docker_(software)' },
    { name: 'Oracle', badgeUrl: 'https://img.shields.io/badge/Oracle-F80000?style=flat&logo=oracle&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Oracle_Database' },
    { name: 'PostgreSQL', badgeUrl: 'https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/PostgreSQL' },
    { name: 'MySQL', badgeUrl: 'https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/MySQL' }
  ];
}
