import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutingUtil } from './routing.util';
// import { Product } from './utils/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'App works!';

  constructor(
    public router: Router
  ) {}

  ngOnInit() {
    RoutingUtil.navigate(this.router, ['/header']);
  }
 }
