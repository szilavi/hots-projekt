import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  http: HttpClient = inject(HttpClient);

  //apiUrl: string = environment.apiUrl;
  apiUrl: string = 'http://localhost:3000/';

  entityName: string = 'heroes';

  // heroes$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  // selectedHero$: BehaviorSubject<Hero | null> =
  //   new BehaviorSubject<Heroes | null>(null);

  constructor() {}

  getAll(page: string = ''): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiUrl}${this.entityName}${page}`);
  }

  get(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.apiUrl}${this.entityName}`, hero);
  }

  update(hero: Hero): Observable<Hero> {
    return this.http.patch<Hero>(
      `${this.apiUrl}${this.entityName}/${hero.id}`,
      hero
    );
  }

  remove(hero: Hero): Observable<Hero> {
    return this.http.delete<Hero>(
      `${this.apiUrl}${this.entityName}/${hero.id}`
    );
  }
  //ez itt egy behaviorSubjectes megoldás

  // getCachedHeroIndexById(id: number): number {
  //   id = Number(id);
  //   const currentHeroList = this.heroes$.getValue();
  //   return currentHeroList.findIndex((hero) => hero['id'] === id);
  // }

  // getAll(): void {
  //   this.http
  //     .get<Hero[]>(`${this.apiUrl}${this.entityName}`)
  //     .subscribe((heroList) => this.heroes$.next(heroList));
  // }

  // get(id: number): void {
  //   const heroIndex = this.getCachedHeroIndexById(id);

  //   if (heroIndex > -1) {
  //     this.selectedHero$.next(this.heroes$.getValue()[heroIndex]);
  //   } else {
  //     this.http
  //       .get<Heroes>(`${this.apiUrl}${this.entityName}/${id}`)
  //       .subscribe((data) => this.selectedHero$.next(data));
  //   }
  // }

  // remove(id: number): void {
  //   this.http
  //     .delete<Hero>(`${this.apiUrl}${this.entityName}/${id}`)
  //     .subscribe(() => {
  //       const heroIndex = this.getCachedHeroIndexById(id);
  //       if (heroIndex > -1) {
  //         const currentHeroList = this.heroes$.getValue();
  //         currentHeroList.splice(heroIndex, 1);
  //         this.heroes$.next(currentHeroList);
  //       }
  //     });
  // }

  // create(hero: Hero): void {
  //   this.http
  //     .post<Hero>(`${this.apiUrl}${this.entityName}`, hero)
  //     .subscribe((hero) => {
  //       this.heroes$.next(this.heroes$.getValue().concat(hero));
  //     });
  // }

  // update(hero: Hero): void {
  //   this.http
  //     .patch<Hero>(`${this.apiUrl}${this.entityName}`, hero)
  //     .subscribe((hero) => {
  //       const currentHeroList = this.heroes$.getValue();
  //       let heroUpdate = currentHeroList.find(
  //         (oldHero) => oldHero.id === hero.id
  //       );
  //       heroUpdate = hero;
  //     });
  // }
}
