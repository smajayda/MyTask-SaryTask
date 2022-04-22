import { Component, OnInit } from '@angular/core';

import { IHeroes } from './heroes';
import { HeroesService } from './heroes.service';

@Component({
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  pageTitle = 'Heroes';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredHeroes = this.listFilter ? this.performFilter(this.listFilter) : this.heroes;
  }

  filteredHeroes: IHeroes[] = [];
  heroes: IHeroes[] = [];

  constructor(private heroesService: HeroesService) { }

  performFilter(filterBy: string): IHeroes[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.heroes.filter((heroe: IHeroes) =>
    heroe.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe({
      next: heroes => {
        this.heroes = heroes;
        this.filteredHeroes = this.heroes;
      },
      error: err => this.errorMessage = err
    });
  }
}
