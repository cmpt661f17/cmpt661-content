import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  template: `
    <h2>{{ title }}</h2>
    
    <a title="Add hero" routerLink="/add" class="btn btn-primary">
      <i class="fa fa-plus" aria-hidden="true"></i>
      <i class="fa fa-address-card" aria-hidden="true"></i>
    </a>
    <br><br>
    
    <div *ngIf="heroes">
      <table class="table table-bordered table-striped table-hover">
        <tr *ngFor="let hero of heroes">
          <td>
            <a routerLink="/update/{{hero._id}}">
              {{hero.name}}
            </a>
          </td>
          <td> {{ hero.heroType }} </td>
          <td align="right"> 
            <ul>
              <li style="direction:rtl;" *ngFor="let quote of hero.quotes"> 
                {{ quote.text }} 
              </li>
            </ul>
          </td>
          <td> 
              <span class="delete" title="Delete hero" (click)="delete(hero)">
                <i style="color: indianred;" class="fa fa-times" aria-hidden="true"></i>
              </span>
          </td>
        </tr>
      </table>
    </div>
  `,
  styles: [`td { vertical-align : middle; }`]
})
export class HeroesComponent implements OnInit {
  title = 'Heroes';
  heroes;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes().subscribe(
      // the first argument is a function which runs on success
      data => {
        this.heroes = data;
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading heroes')
    );
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero._id).subscribe(
      res => {
        this.heroes = this.heroes.filter(h => h !== hero);
      }
    );
  }

}
