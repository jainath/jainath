import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // users$: Object;
  user$: Object;
  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => {
      if (this.user$ = params.id) {
        this.data.getUser(this.user$).subscribe(
          data => this.user$ = data
        );
      }
    });
  }

  ngOnInit() {
    // this.data.getUser(this.user$).subscribe(
    //   data => this.user$ = data 
    // );

    // this.data.getUsers().subscribe(
    //   data => this.users$ = data 
    // )
  }

}
