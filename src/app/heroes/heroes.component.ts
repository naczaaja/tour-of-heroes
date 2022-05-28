import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  heroes: Hero[] = [];

  message = '';


  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    // this.heroFormGroup.setValue(this.hero);
    this.heroService.getHeroes().subscribe({
      next: hs => this.heroes = hs,
      error: err => this.message = err.message
    });
  }

}
