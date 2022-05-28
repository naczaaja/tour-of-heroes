import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: `dear's เดดไลน์ โอ้โฮเฮะ ++`,
  //   power: 100
  // };

  heroFormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  })

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
    // this.heroFormGroup.setValue(this.hero);
  }

  onSelectHero(hero: Hero) {
    this.heroFormGroup.setValue(hero);
  }

}
