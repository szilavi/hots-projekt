import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-herocard',
  templateUrl: './herocard.component.html',
  styleUrls: ['./herocard.component.scss'],
})
export class HerocardComponent implements OnInit {
  @Input() hero: Hero = new Hero();

  constructor(private heroService: HeroesService) {}

  ngOnInit(): void {}

  removeHero(hero: Hero): void {
    if (confirm('Are you sure?')) {
      this.heroService
        .remove(hero)
        .subscribe(() =>
          this.heroService.getAll().subscribe(() => location.reload())
        );
    }
  }
}
