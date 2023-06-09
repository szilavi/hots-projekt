import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.scss'],
})
export class HerolistComponent implements OnInit {
  //heroList$: BehaviorSubject<Heroes[]> = this.heroesService.heroes$; a lapozó elkészültéig behaviorsubject volt, utána váltottam

  allHero$: Observable<Hero[]> = this.heroesService.getAll();

  //paginator

  allPage: number[] = [];

  page: number = 1;

  heroList: Hero[] = [];

  //searcher

  phrase: string = '';
  filterKey: string = '';
  heroFilterKeys: any[] = [
    { key: 'name', title: 'Hero name' },
    { key: 'owned', title: 'Owned' },
  ];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.refreshPage();

    this.heroesService.getAll().subscribe((datalist) => {
      for (let i = 0; i < Math.ceil(datalist.length / 20); i++) {
        this.allPage.push(i + 1);
      }
    });
  }

  onPage(page: number): void {
    this.page = page;
    this.refreshPage();
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page = this.page - 1;
    }
    this.refreshPage();
  }

  nextPage(): void {
    if (this.page !== this.allPage.length) {
      this.page = this.page + 1;
    }
    this.refreshPage();
  }

  refreshPage(): void {
    this.heroesService
      .getAll(`?_page=${this.page}&_limit=20`)
      .subscribe((dataList) => (this.heroList = dataList));
  }
}
