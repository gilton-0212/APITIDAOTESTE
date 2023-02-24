import { ResponseUsers } from './../user.model';

import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  responseUsers! : ResponseUsers;

  constructor(
    private userService : UserService,
    )
  { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(res => this.responseUsers = res)


  }
}
