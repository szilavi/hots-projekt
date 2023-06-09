import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-heroeditor',
  templateUrl: './heroeditor.component.html',
  styleUrls: ['./heroeditor.component.scss'],
})
export class HeroeditorComponent implements OnInit {
  heroService: HeroesService = inject(HeroesService);
  ar: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  //itt csak azért használom az injectet, mert Józsi megtanította és gondoltam legyen egy ilyen is (lássa, hogy figyelek :P)

  hero$: Observable<Hero> = this.ar.params.pipe(
    switchMap((params) => this.heroService.get(params['id']))
  );

  statusList: any[] = [
    { key: 'true', title: 'YES, the hero is in my library' },
    { key: '', title: 'NO, the hero is not in my library' },
  ];

  hero: Hero = new Hero();

  checked: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.hero$.subscribe((hero) => {
      this.hero = hero;
    });
  }

  onChecked(): void {
    this.checked = !this.checked;
  }

  onSubmit(hero: Hero): void {
    hero.id = Number(hero.id);
    hero.level = Number(hero.level);
    hero.owned = Boolean(hero.owned);

    if (this.hero.id) {
      this.heroService
        .update(hero)
        .subscribe((hero) => this.router.navigate(['/herolist']));
    } else if (!this.hero.id) {
      this.heroService
        .create(hero)
        .subscribe((hero) => this.router.navigate(['/herolist']));
    }
  }
}
