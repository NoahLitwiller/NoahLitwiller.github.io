import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  curr_route = "/";


  constructor(private router: Router) { 
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.updateCurrRoute() )
  }

  updateCurrRoute = () => {
    this.curr_route = this.router.url;
  };

  isCurrRoute(route: String){
    return route == this.curr_route;
  }
  

  ngOnInit(): void {  }

}
