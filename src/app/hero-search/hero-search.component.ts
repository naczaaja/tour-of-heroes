import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit, OnDestroy {

  _destroy$ = new Subject<void>();

  termFormControl = new FormControl();

  heroes: Hero[] = [];

  heroes$!: Observable<Hero[]>;

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {

    //this.termFormControl.valueChanges
    //.subscribe(
    //value => this.heroService.searchHero(value)
    //.subscribe(
    //hs => this.heroes = this.heroes = hs
    //)
    //);
    this.heroes$ = this.termFormControl.valueChanges
      .pipe(
        takeUntil(this._destroy$),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(value => this.heroService.searchHero(value))
      );
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

}
