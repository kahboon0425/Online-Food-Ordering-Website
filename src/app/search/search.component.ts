import { Component, OnInit } from '@angular/core';
// Activated route is for reading to the route, router is for writing to the route
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchTerm:String = "";
  constructor(private route:ActivatedRoute, private router:Router) {}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
        this.searchTerm = params['searchTerm'];
    })

  }

  search():void{
    if(this.searchTerm)
    this.router.navigateByUrl('/search/' + this.searchTerm);
  }

}
