import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styles: []
})
export class HeroEditorComponent implements OnInit {
  heroTypes = ['Prophet', 'Companion', 'Scholar'];
  hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private router: Router) {
  }

  ngOnInit() {
    this.getHero();
  }

  addQuote() {
    if (!this.hero.quotes) {
      this.hero.quotes = [];
    }
    this.hero.quotes.push({text: ''});
  }

  deleteQuote(index) {
    this.hero.quotes.splice(index, 1);
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("this.route.snapshot.paramMap.get('id')", id);

    if (id) {
      this.heroService.getHero(id).subscribe(hero => {
          this.hero = hero;
        });
    } else {
      console.log('Entered HeroEditor add mode');
      this.hero = new Hero();
      this.addQuote();
    }
  }

  goBack() {
    this.router.navigateByUrl('/heroes');
  }

  onSubmit() {
    if (!this.hero._id) {
      this.heroService.addHero(this.hero).subscribe(() => this.goBack());
    } else {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}


/*
// Ignore - For Reactive Forms

    //this.quotes = this.heroForm.get('quotes') as FormArray;
    //this.quotes.push(this.createQuote(''));

    //console.log( this.heroForm.get('quotes') );
    //this.quotes = this.heroForm.get('quotes') as FormArray;
    //this.quotes.controls.splice(index, 1);

    //console.log( this.heroForm.get('quotes').value );
    //this.hero.quotes = this.heroForm.get('quotes').value;

  setupForm() {
    const quoteControls = [];
    if ( this.hero.quotes && this.hero.quotes.length > 0 ) {
      for(let quote of this.hero.quotes) {
        quoteControls.push(this.createQuote( quote.text ));
      }
    } else {
      quoteControls.push(this.createQuote( '' ));
    }

    this.heroForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      heroType: ['', Validators.required],
      quotes: this.formBuilder.array( quoteControls )
    });
  }

  createQuote(quoteText): FormGroup {
    return this.formBuilder.group({
      text: quoteText
    });
  }
 */
