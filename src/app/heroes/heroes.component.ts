import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id:1,
    name: `naczaaja is the god`
  };



  heroFormControl = new FormControl(this.hero, Validators.required)

  heroFormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
    //this.hero = this.hero + "++"
    this.heroFormGroup.setValue(this.hero)
  }

}
