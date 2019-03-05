import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Object;
  // user$: Object;
  
  constructor(private route: ActivatedRoute,private data: DataService) { 
    // this.route.params.subscribe( params => this.user$ = params.id );
  }

  ngOnInit() {
    // this.data.getUser(this.user$).subscribe(
    //   data => this.user$ = data 
    // );
    
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    );
  }

}
