import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public rotaAtualEhHome: boolean = false;

  private subscription: Subscription = new Subscription();

  constructor(private router: Router) { }

  ngOnInit() {
    this.inicializarVariaveisTemplate();
  }

  private inicializarVariaveisTemplate(): void {
    this.subscription.add(
      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.rotaAtualEhHome = event.url === '/';
        }
      }))
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
