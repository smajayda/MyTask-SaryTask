import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IHeroes } from './heroes';
import { HeroesService } from './heroes.service';

@Component({
  templateUrl:'./heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  pageTitle = 'Heroe Detail';
  errorMessage = '';
  heroes: IHeroes | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getHeroes(id);
    }
  }

  getHeroes(id: number): void {
    this.heroesService.getHeroe(id).subscribe({
      next: heroe => this.heroes = heroe,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/heroes']);
  }
}
