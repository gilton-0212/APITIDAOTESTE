import { User } from './../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  id! : string;
  user! : User;

  constructor(
    private userservice : UserService,
    private route : ActivatedRoute,
    private route1 : Router
    ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id')!;
    this.userservice.getOneUser(this.id).subscribe(res => {
      this.user = res.data;
    });
  }

  delete(){
    this.userservice.deleteUser(this.id).subscribe(res => {
      alert('Removido com sucesso')
    })
  }

  cancel(){
    this.route1.navigate(['/user'])
  }

}
