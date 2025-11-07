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
    { name: 'Spring', badgeUrl: 'https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=spring&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Spring_Framework' },
    { name: 'Node.js', badgeUrl: 'https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Node.js' },
    { name: 'Flask', badgeUrl: 'https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Flask_(web_framework)' }
  ];

  frontendSkills: Skill[] = [
    { name: 'Flutter', badgeUrl: 'https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Flutter' },
    { name: 'Vue.js', badgeUrl: 'https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Vue.js' },
    { name: 'React.js', badgeUrl: 'https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/React_(software)' }
  ];

  othersAndRoboticsSkills: Skill[] = [
    { name: 'ROS', badgeUrl: 'https://img.shields.io/badge/ROS-22314E?style=flat&logo=ros&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Robot_Operating_System' },
    { name: 'Kubernetes', badgeUrl: 'https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Kubernetes' },
    { name: 'PostgreSQL', badgeUrl: 'https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/PostgreSQL' },
    { name: 'Docker', badgeUrl: 'https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Docker_(software)' },
    { name: 'Git', badgeUrl: 'https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white', wikiUrl: 'https://en.wikipedia.org/wiki/Git' }
  ];
}
